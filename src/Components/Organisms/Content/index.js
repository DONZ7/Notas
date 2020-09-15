import React, { Fragment } from 'react';
import {View,Text,StyleSheet,ScrollView, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import styles from './style';
import {Note} from '../../Molecules';
import {AddNote} from '../../Atoms';
//import {Actions} from 'react-native-router-flux';
//import CreateNote from '../../Views/CreateNote';

const Content=()=>{

const handlePress=()=>{
    console.warn('hola este es una prueba');
    
}

    return(
        <Fragment>
            <ScrollView >
                <TouchableOpacity onPress={()=>{handlePress}}>
                    <Note/>
               
                <Text>ffff</Text>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>

                </TouchableOpacity>
            </ScrollView>
           
                <View style={styles.noteBody} >  
                <TouchableOpacity>              
                    <AddNote/>
                </TouchableOpacity>

                </View>

             
        </Fragment>
    );
}

export default Content;