import React,{Fragment,useState} from 'react';
import {View,Alert} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';
import {setData} from './../../../hooks/firebase';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';


const CreateNote=(props)=>{
    const user = auth().currentUser;
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [id, setId] = useState(props.id);
    

    const updateTitle=(value)=>{
        setTitulo(value);
    }

    const updateBody=(value)=>{
        setContenido(value);
    }

    const MessageSuccess=() => {
    
            showMessage({
                icon: "success", position: "right",
                message: titulo,
                description: "Nota creada exitosamente",
                type: "success",
            });
    }

    const addNote=()=>{
        setData(user.uid,user.email,titulo,contenido,imageUrl);
        Actions.Home();
        MessageSuccess()
        console.warn({titulo,contenido,imageUrl})
    }
  //  console.warn({titulo,contenido})

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
        'La imagen ha sido agregada a su nota de texto.'
      );
     
      setImage(null);
      
    
  };



    return (
        <Fragment>
             <View style={styles.container}>
                <Navbar titulo={titulo} contenido={contenido} id={id} action={addNote} selectImage={selectImage} uploadImage={uploadImage} />
                <NoteBody titulo={titulo} updateTitle={updateTitle} contenido={contenido} updateBody={updateBody} 
                imageUrl={imageUrl} image={image} selectImage={selectImage} uploadImage={uploadImage}
                uploading={uploading} transferred={transferred}/>
            </View>
        </Fragment>
    );
}

export default CreateNote;