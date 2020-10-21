import React, { Fragment,useState } from 'react';
import {View,Text,ScrollView,TextInput,SafeAreaView,TouchableOpacity,Image,Alert} from 'react-native';
import styles from './style';
import Textarea from 'react-native-textarea';

import firestore from '@react-native-firebase/firestore';
import UploadPicker from './../../../../Upload';
import {Input,Images}  from '../../Atoms'
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';


const NoteBody=({titulo,updateTitle,updateBody,contenido})=>{
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



    return(
        <Fragment>
            <ScrollView style={styles.container}>
              <View style={styles.noteBody}>
                <View >
                    
                <TextInput
                    style={styles.text}
                    placeholder='Titulo..'
                    onChangeText={updateTitle}
                    value={titulo}
                    maxLength={30}
                    />

                </View>
                <View style={styles.space}></View>

                <View style={styles.noteBody}>
                <View  style={styles.container2}>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={updateBody}
                        value={contenido}
                        maxLength={200}
                        placeholder={'Texto...'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    </View>
                </View>

                <View style={styles.boxImage}>
                   

                <SafeAreaView style={styles.container7}>
          <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
            <Text style={styles.buttonText}>Agregar imagen</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {image !== null ? (
              <Image source={{ uri: image.uri }} style={styles.imageBox7} />
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

                <Images photo={imageUrl}/>
                </View>
              </View>
            </ScrollView>
        </Fragment>
    );
}

export default NoteBody;




/*
 <Input name="hola este es mi nombre Nos"/>
                 
                <View style={styles.space}></View>
                <Input name="hola este es mi nombre dddddbvdhvshvhsvdhsvhdvshvbhdhvdh"/>
                */
