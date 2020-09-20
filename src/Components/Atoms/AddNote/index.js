import React, { Fragment } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import styles from './style';
import {Icons} from '../../Atoms'
const AddNote=()=>{
   
    return(
        <Fragment>
            <View style={styles.container}>
               <Icons name="reader" color="white"/>
            </View>
        </Fragment>
    );
}

export default AddNote;