import React, { Fragment,useState } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { Input, Buttons ,Icons} from '../../Atoms';

const Registry=()=>{
    /*
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    
    const registro=()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.warn(errorMessage);
            // ...
          });
    }
    */
    
        const handleHome=()=>{
           // console.warn({email,password})
            //registro();
            Actions.Home()
        };

    return(
        <Fragment>
            <View style={styles.column}>
               <View>
               <TouchableOpacity onPress={handleHome}>
                     <Icons name="return-up-back" color="purple"/>
                </TouchableOpacity>
               </View>
            <Text style={styles.text}>Registrarse</Text>
            
            <View style={styles.inputBox}>           
                    <Input name="holaa"/>
                </View>
                <View style={styles.inputBox}>           
                    <Input name="holaa"/>
                </View>
                <View style={styles.inputBox}>   
                    <Input name="holaa"/>
                </View>
                <View style={styles.inputBox}>           
                    <Input name="holaa"/>
                </View>
                <View Style={styles.inputBox}>
                    <Buttons name="SIGUIENTE"/>
                </View>
            </View>
        </Fragment>
    );
}

export default Registry;