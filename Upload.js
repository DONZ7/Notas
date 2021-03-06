import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';

const UploadPicker=()=> {
    const [imageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const selectImage = () => {
        const options = {
          title:'Seleccionar imagen',
          maxWidth: 2000,
          maxHeight: 2000,
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log(source);
            setImage(source);
          }
        });
    };
      const uploadImage = async () => {
        const { uri } = image;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        setUploading(true);
        setTransferred(0);
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);

        // set progress state
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
          await task;
          let storageUrl = await storage()
          .ref(filename).getDownloadURL();
          setImageUrl(storageUrl);
          console.warn(storageUrl);
        } catch (e) {
          console.error(e);
        }
        setUploading(false);
        Alert.alert(
          'Imagen guardada!',
          'Imagen guardada en Firebase Cloud Storage.'
        );
       
        setImage(null);
        
      
    };


      return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Agregar imagen</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {image !== null ? (
              <Image source={{ uri: image.uri }} style={styles.imageBox} />
            ) : null}
            {uploading ? (
              <View style={styles.progressBarContainer}>
                <Progress.Bar progress={transferred} width={300} />
              </View>
            ) : (
              <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                <Text style={styles.buttonText}>Guardar imagen</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      );
    }

export default UploadPicker;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white'
        },
        selectButton: {
          borderRadius: 5,
          width: 150,
          height: 50,
          backgroundColor: '#8ac6d1',
          alignItems: 'center',
          justifyContent: 'center'
        },
        uploadButton: {
          borderRadius: 5,
          width: 150,
          height: 50,
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold'
        },
        imageContainer: {
          marginTop: 30,
          marginBottom: 50,
          alignItems: 'center'
        },
        progressBarContainer: {
          marginTop: 20
        },
        imageBox: {
          width: 300,
          height: 300
        }
      });