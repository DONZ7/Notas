import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons,Modals} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';
//import NoteBody from '../../Molecules';


const Navbar=({titulo,contenido,action})=>{
    

    const notes=()=>{
      action(titulo,contenido);
      //console.warn({titulo,contenido})
       Actions.Home()
    }
    
    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                <TouchableOpacity onPress={notes}>
                    <Icons name="checkmark-sharp" color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Modals name='close' message='¿Desea cancelar esta nota de texto?'/>
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
                             <Modals name='trash' message='¿Desea eliminar esta nota de texto?'/>
                </TouchableOpacity>
                </View>
                    
               

            </View>
        </Fragment>
    );
}

export default Navbar;