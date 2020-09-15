import React, { Fragment } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import styles from './style';
import { Input, Buttons } from '../../Atoms';

const LoginUsers=()=>{
    return(
        <Fragment>
            <View style={styles.column}>
               
            <Text style={styles.text}>Iniciar Sesion</Text>
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

export default LoginUsers;