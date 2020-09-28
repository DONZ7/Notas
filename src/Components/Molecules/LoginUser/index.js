import React, { Fragment,useState } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { Input, Buttons, Icons } from '../../Atoms';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const LoginUsers=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const login = async () => {
        try {
          const {user} = await auth().createUserWithEmailAndPassword(
            'prueba@gmail.com',
            'asd.456',
          );
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      };

/*
      const signedOut = async () => {
    
      auth()
  .signOut()
  .then(() => console.log('User signed out!'));
};*/

    const updateEmail=(value)=>{
        setEmail(value);
    }

    const updatePassword=(value)=>{
        setPassword(value);
    }

        const handleHome=()=>{
            console.warn({email,password})
           login();
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