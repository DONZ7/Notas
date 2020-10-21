import React, { Fragment } from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
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
                         <Image source={require('../../../img/Doney.png')} style={styles.space2}/>
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