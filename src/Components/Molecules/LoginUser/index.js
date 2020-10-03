import React, { Fragment,useState } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { Input, Buttons, Icons,Alert } from '../../Atoms';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const LoginUsers=()=>{
    const user = auth().currentUser;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const login = async () => {

        try {
          const {user} = await auth().signInWithEmailAndPassword(
            email,
            password
          );
     
          console.warn(user.uid);
          Actions.Home()
        } catch (error) {

              if (error.code === 'auth/invalid-email') {
                alert('El correo ingresado es invalido');
                console.warn('That email address is invalid!');
              }

              if (error.code === 'auth/user-not-found') {
                alert('Usuario no registrado');
                console.warn('Usuario no registrado');
              }

              if (error.code === 'auth/wrong-password') {
                alert('La contraseña ingresada es incorrecta');
                console.warn('Usuario no registrado');
              }
          console.error(error.code);
        }
      };


    const updateEmail=(value)=>{
        setEmail(value);
    }

    const updatePassword=(value)=>{
        setPassword(value);
    }

        const handleHome=()=>{
            if (password=="" || email=="" ) { 
                alert('Debe de llenar todos los campos');
               }
             else{ 
                login();
               }
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
                <Input value={password} action={updatePassword} placeholder="Password" />
                </View>
                <View Style={styles.inputBox}>
                    <Buttons name="SIGUIENTE" action={handleHome}/>
                </View>
            </View>
        </Fragment>
    );
}

export default LoginUsers;