import React, { Fragment } from 'react';
import {View,Text, Button,StyleSheet,ImageBackground} from 'react-native';


import {Modals} from '../../Atoms';
import { Header,Content } from '../../Organisms';
import { Navbar, Registry, LogoStart } from '../../Molecules';
import CreateNote from '../CreateNote';
const Start=()=>{
    return(
        <Fragment>
            <ImageBackground source={require('./../../../img/fondo.jpg')} style={styles.container}>
                 <LogoStart/>
            </ImageBackground>
        </Fragment>
    );
}

export default Start;

const styles=StyleSheet.create({

    container:{
        width:'100%',
        height:'100%'
    },
})