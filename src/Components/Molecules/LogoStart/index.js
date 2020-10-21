import React, { Fragment } from 'react';
import {View,Text,StyleSheet, ActivityIndicator} from 'react-native';
import {Images,Buttons} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';

const LogoStart=()=>{
    const handleStart=()=>{
        Actions.Login()
    };

    const handleRegistry=()=>{
        Actions.Registry()
            };

    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                    <View >
                         <Images photo="" he="250" wi="300"/>
                    </View>
                         <View style={styles.space}></View>
                    </View>
                    <View style={styles.row}>
                        <Buttons name='INICIAR SESION' action={handleStart}/>
                        
                        <Buttons name='REGISTRARSE' action={handleRegistry}/>
                    </View>

                      
                
            </View>
        </Fragment>
    );
}

export default LogoStart;