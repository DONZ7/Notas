import React, { Fragment,useEffect } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons,Modals} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import {deleteData} from './../../../hooks/firebase';

const Navbar=({id,titulo,contenido,action})=>{

   
    const MessageSuccess=() => {
    
        showMessage({
            icon: "danger", position: "right",
            message: titulo,
            description: "Nota eliminada exitosamente",
            type: "danger",
        });
}
    const user = auth().currentUser;


    const deleteNote=()=>{
        deleteData(id);
        Actions.Home();
        MessageSuccess();
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
                <TouchableOpacity onPress={action} 
                 style={{ ...styles.openButton2} }>
                    <Icons name="checkmark-sharp" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Modals name='close' message='¿Desea cancelar esta nota de texto?' action={handleHome}/>
                </TouchableOpacity>
                </View>
                    <View >
                        <Text style={styles.text}>{user.displayName}</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                
                <TouchableOpacity style={styles.IconsContainerRigth}>
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