import React, { Fragment,useState } from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import styles from './style';
import { Input, Buttons ,Icons} from '../../Atoms';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const Registry=()=>{
    
    const [users, setUsers] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const user = auth().currentUser;
    
    const updateEmail=(value)=>{
        setEmail(value);
    }

    const updatePassword=(value)=>{
        setPassword(value);
    }

    const updateUSers=(value)=>{
        setUsers(value);
    }

    const updatePassword2=(value)=>{
        setPassword2(value);
    }

    const registro= async()=>{
        try {
             await auth().createUserWithEmailAndPassword(email, password);
            Actions.Home();
            const update = {displayName: users};
            let {user} =await auth().currentUser.updateProfile(update);
            
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('El correo ya esta registrado por otro usuario ');
                    console.warn('That email address is already in use!');
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    alert('El correo ingresado es invalido');
                    console.warn('That email address is invalid!');
                  }
    
                  if (error.code === 'auth/network-request-failed') {
                    alert('Error de su conexion a internet');
                    console.warn('Usuario no registrado');
                  }
    
                  if (error.code === 'auth/wrong-password') {
                    alert('La contraseña ingresada es incorrecta');
                    console.warn('Usuario no registrado');
                  }

                  if (error.code === 'auth/weak-password') {
                    alert('La contraseña debe de tener 6 o mas caracteres');
                    console.warn('Usuario no registrado');
                  }
                
              console.error(error.code);
            }
          };
    
    
    
    
   const handleStart=()=>{
     Actions.Start()
 };
        const handleHome=()=>{
            if (password=="" || email=="" || password2=="" || users=="") { 
                alert('Debe de llenar todos los campos');
               } 
            else if (password!=password2) { 
                alert('Las contraseñas ingresadas no coinciden');
               } 
             else{ 
                registro();
               }
            
            
        };

    return(
        <Fragment>
            <View style={styles.column}>
               <View style={styles.text}>
               <TouchableOpacity onPress={handleStart}>
                     <Icons name="return-up-back" color="purple"/>
                </TouchableOpacity>
               </View>
            <Text style={styles.text}>Registrarse</Text>
            
            <View style={styles.inputBox}>           
            <Input value={users} action={updateUSers} placeholder="Usuario"/>
                </View>
                <View style={styles.inputBox}>           
                <Input value={email} action={updateEmail} placeholder="Email"/>
                </View>
                <View style={styles.inputBox}>   
                <Input value={password}  action={updatePassword} placeholder="Contraseña"/>
                </View>
                <View style={styles.inputBox}>           
                <Input value={password2} action={updatePassword2}  placeholder="Confirmar Contraseña"/>
                </View>
                <View Style={styles.inputBox} >
                    <Buttons name="SIGUIENTE" action={handleHome}/>
                </View>
            </View>
        </Fragment>
    );
}

export default Registry;