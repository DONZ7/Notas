import React, { Fragment,useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import styles from './style';
import { Input, Buttons, Icons } from '../../Atoms';
import {Actions} from 'react-native-router-flux';

//import {firebaseAuth} from './../../../firebase';
//import 'firebase/auth';

const LoginUsers=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  /*
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

    const updateEmail=(value)=>{
        setEmail(value);
    }

    const updatePassword=(value)=>{
        setPassword(value);
    }

        const handleHome=()=>{
            console.warn({email,password})
          // registro();
            Actions.Home()
        };
    
        const handleStart=()=>{
            Actions.Start()
                };

    return(
        <Fragment>
            <View style={styles.column}>
                <TouchableOpacity onPress={handleStart}>
                     <Icons name="return-up-back" color="purple"/>
                </TouchableOpacity>
            <Text style={styles.text}>Iniciar Sesion</Text>
                <View style={styles.inputBox}>   
                    <Input value={email} action={updateEmail} placeholder="Email"/>
                </View>
                <View style={styles.inputBox}>           
                <Input value={password} action={updatePassword} placeholder="Password"/>
                </View>
                <View Style={styles.inputBox}>
                    <Buttons name="SIGUIENTE" action={handleHome}/>
                </View>
            </View>
        </Fragment>
    );
}

export default LoginUsers;