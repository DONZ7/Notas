import React, { Fragment } from 'react';
import {View,Text, ImageBackground} from 'react-native';
import styles from './style';

import {Buttons,Input,Icon} from '../../Atoms';
import { Header,Content } from '../../Organisms';
import { Navbar,LogoStart, Registry,LoginUsers } from '../../Molecules';
const Login=()=>{
    return(
        <Fragment>
            <ImageBackground source={require('./../../../img/fondo.jpg')} style={styles.container}>
            <View style={styles.container}>
                <LoginUsers/>
            </View>
            </ImageBackground>
        </Fragment>
    );
}

export default Login;