import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons,Modals} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const NavbarHome=({UserName})=>{
    
    const handleOut=()=>{
        Actions.Start()
            };

            let user = auth().currentUser;
    
  const signedOut = async () => {
     try{ await auth().signOut()
        handleOut();
        console.warn(user.uid);}
        catch(error){
            console.warn(error)
        }
};

    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                    <TouchableOpacity>
                         <Icons name="sync-sharp" color="white"/>  
                    </TouchableOpacity>       
                </View>
                    <View >
                        <Text style={styles.text}>{user.displayName}</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                 <Modals name='log-out' message='¿Desea cerrar sesion?' action={signedOut}/>
                </View>
            </View>
        </Fragment>
    );
}

export default NavbarHome;