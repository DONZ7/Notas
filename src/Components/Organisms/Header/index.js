import React, { Fragment } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import styles from './style';
import {NavbarHome} from  '../../Molecules';

const Header=()=>{
    return(
        <Fragment>
                <NavbarHome/>
        </Fragment>
    );
}

export default Header;