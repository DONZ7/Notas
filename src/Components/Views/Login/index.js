import React, { Fragment } from 'react';
import {View,Text, Button} from 'react-native';
import styles from './style';

import {Buttons,Input,Icon} from '../../Atoms';
import { Header,Content } from '../../Organisms';
import { Navbar,LogoStart, Registry,LoginUsers } from '../../Molecules';
const Login=()=>{
    return(
        <Fragment>
            <View style={styles.container}>
                <LoginUsers/>
            </View>
            
        </Fragment>
    );
}

export default Login;