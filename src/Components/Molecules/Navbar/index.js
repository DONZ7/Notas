import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons,Modals} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';
//import NoteBody from '../../Molecules';
import {deleteData} from './../../../hooks/firebase';

const Navbar=({id,titulo,contenido,action})=>{
    


    const deleteNote=()=>{
        deleteData(id);
        Actions.Home()
        console.warn({id})
    }

    const handleHome=()=>{
        //console.warn({titulo,contenido})
         Actions.Home()
      }
    
    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                <TouchableOpacity onPress={action}>
                    <Icons name="checkmark-sharp" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Modals name='close' message='¿Desea cancelar esta nota de texto?' action={handleHome}/>
                </TouchableOpacity>
                </View>
                    <View >
                        <Text style={styles.text}>Titulo</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                
                <TouchableOpacity>
                    <Icons name="image" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                             <Modals name='trash' message='¿Desea eliminar esta nota de texto?' action={deleteNote}/>
                </TouchableOpacity>
                </View>
                    
               

            </View>
        </Fragment>
    );
}

export default Navbar;