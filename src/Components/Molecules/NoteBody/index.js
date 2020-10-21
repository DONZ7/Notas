import React, { Fragment,useState } from 'react';
import {View,Text,ScrollView,TextInput,SafeAreaView,TouchableOpacity,Image,Alert} from 'react-native';
import styles from './style';
import Textarea from 'react-native-textarea';

import firestore from '@react-native-firebase/firestore';
import UploadPicker from './../../../../Upload';
import {Input,Images}  from '../../Atoms'
import * as Progress from 'react-native-progress';



const NoteBody=({titulo,updateTitle,updateBody,contenido,imageUrl,image,uploadImage,selectImage,
    uploading,transferred})=>{
    
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

                <Images photo={imageUrl} style={styles.imageBox7}/>
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
