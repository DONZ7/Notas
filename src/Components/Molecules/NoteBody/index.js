import React, { Fragment,useState } from 'react';
import {View,Text,ScrollView,TextInput,StyleSheet} from 'react-native';
import styles from './style';
import Textarea from 'react-native-textarea';

import {Input,Images}  from '../../Atoms'

const NoteBody=()=>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const updateTitle=(value)=>{
        setTitle(value);
    }

    const updateBody=(value)=>{
        setBody(value);
    }


    const notes=()=>{
        console.warn({title,body})
    }

    //notes();
    return(
        <Fragment>
            <ScrollView style={styles.container}>
              <View style={styles.noteBody}>
                <View >
                    
                <TextInput
                    style={styles.text}
                    placeholder='Titulo..'
                    onChangeText={updateTitle}
                    value={title}
                    />

                </View>
                <View style={styles.space}></View>

                <View style={styles.noteBody}>
                <View  style={styles.container2}>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={updateBody}
                        value={body}
                        maxLength={300}
                        placeholder={'Texto...'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    </View>
                </View>

                <View style={styles.boxImage}>
                <Images/>
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
