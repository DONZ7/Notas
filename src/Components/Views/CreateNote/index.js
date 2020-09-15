import React,{Fragment} from 'react';
import {View,Text} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';

const CreateNote=()=>{
    return (
        <Fragment>
             <View style={styles.container}>
                <Navbar/>
                <NoteBody/>
            </View>
        </Fragment>
    );
}

export default CreateNote;