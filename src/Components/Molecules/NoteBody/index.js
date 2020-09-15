import React, { Fragment } from 'react';
import {View,Text,ScrollView} from 'react-native';
import styles from './style';

import {Input,Images}  from '../../Atoms'

const NoteBody=()=>{
    return(
        <Fragment>
            <ScrollView style={styles.container}>
              <View style={styles.noteBody}>
                <View >
                    <Text style={styles.text}>Titulo...</Text>
                </View>
                <View style={styles.space}></View>
                <View >
                    <Text>hola  ddd dd
                        sdmcdsbcbdsbj111111 11111  1nbhbhbhbh 1jbj
                        sbdjbdsjjsbbhbh22kkkkkkkkfftrftftftftftftftftfyyyyyyygygygygyyyyyygygygygygygygyghhgvgvgvgggfgvghvhhhhhhhhhhhhhhhhhhhhhhhhh
                        hbhbhbhbhbhbhb
                        vgvgvgvgvbhbhbhbhbhbhbhbhbhbygygygygygygygygygygygynbhbhbhbhbhbhbhbhhhhhhfff
                        jjjjhgfdfdfgdgfccgvgvhgvgvg
                        ddgvdgvdgdvgdvgdvgdvgdvdgvsjdvhjsd
                        ddhbdhbdhbdhbdhbd
                        hhhhhhbhbhjbhbhbh
                        jhjhjuh22222  jj       hfdffffggdd
                        dddddddddddddddd h kkkk
                        kkjjjjjjjjjjjjhhhvdsxvgdvxgsvxgsvxgvsgxvsgvxg
                        hola  ddd dd11  1nbhbhbhbh 1jbj
                
                        </Text>
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