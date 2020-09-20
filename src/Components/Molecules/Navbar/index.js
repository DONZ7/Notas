import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons} from '../../Atoms';
import styles from './style';
import NoteBody from '../../Molecules';

const Navbar=(props)=>{
    const {title,body}=props
    const notes=()=>{
        console.warn({title,body})
    }
    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                <TouchableOpacity onPress={notes}>
                    <Icons name="checkmark-sharp" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons name="close" color="white"/>
                </TouchableOpacity>
                </View>
                    <View >
                        <Text style={styles.text}>Titulo</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                <TouchableOpacity>
                    <Icons name="pencil" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons name="image" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons name="trash" color="white"/>
                </TouchableOpacity>
                </View>
                    
               

            </View>
        </Fragment>
    );
}

export default Navbar;