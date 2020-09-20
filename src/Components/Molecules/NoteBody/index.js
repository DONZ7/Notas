import React, { Fragment,useState } from 'react';
import {View,Text,ScrollView,TextInput} from 'react-native';
import styles from './style';

import {Input,Images}  from '../../Atoms'

const NoteBody=()=>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const notes=()=>{
        console.warn({title,body})
    }
    return(
        <Fragment>
            <ScrollView style={styles.container}>
              <View style={styles.noteBody}>
                <View >
                    
                    <Input style={styles.text} name={title} action={setTitle}/>

                </View>
                <View style={styles.space}></View>

                <View style={styles.noteBody}>
                 <TextInput
                    style={styles.box}
                    onChangeText={setBody}
                    value={body}
                    />
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