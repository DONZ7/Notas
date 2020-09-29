import React, { Fragment,useEffect } from 'react';
import {View,Text,StyleSheet,ScrollView, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import styles from './style';
import {Note} from '../../Molecules';
import {AddNote} from '../../Atoms';
import {Actions} from 'react-native-router-flux';
import {getData} from './../../../hooks/firebase';

const Content=({note})=>{

const handlePress=()=>{
   Actions.CreateNote();
    
}
    return(
        <Fragment>
            <ScrollView >
            { Array(7).fill(note).map(nate=>{
                return <Note note={note}/>
                })
            }
                    
            
            </ScrollView>
           
                <View style={styles.noteBody} >  
                <TouchableOpacity onPress={handlePress}>              
                    <AddNote/>
                </TouchableOpacity>

                </View>

             
        </Fragment>
    );
}

export default Content;