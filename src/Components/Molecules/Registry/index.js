import React, { Fragment,useState } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
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
            auth().currentUser.updateProfile(update);
            
            } catch (error) {
                
              console.error(error);
            }
          };
    
    
    
    
   const handleStart=()=>{
     Actions.Start()
 };
        const handleHome=()=>{
           // console.warn({email,password})
            registro();
            
        };

    return(
        <Fragment>
            <View style={styles.column}>
               <View>
               <TouchableOpacity onPress={handleStart}>
                     <Icons name="return-up-back" color="purple"/>
                </TouchableOpacity>
               </View>
            <Text style={styles.text}>Registrarse</Text>
            
            <View style={styles.inputBox}>           
            <Input value={users} action={updateUSers} placeholder="Nombre"/>
                </View>
                <View style={styles.inputBox}>           
                <Input value={email} action={updateEmail} placeholder="Email"/>
                </View>
                <View style={styles.inputBox}>   
                <Input value={password}  action={updatePassword} placeholder="Password"/>
                </View>
                <View style={styles.inputBox}>           
                <Input value={password2} action={updatePassword2}  placeholder="Password"/>
                </View>
                <View Style={styles.inputBox} >
                    <Buttons name="SIGUIENTE" action={handleHome}/>
                </View>
            </View>
        </Fragment>
    );
}

export default Registry;