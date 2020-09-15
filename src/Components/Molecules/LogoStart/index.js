import React, { Fragment } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Images,Buttons} from '../../Atoms';
import styles from './style';

const LogoStart=()=>{
    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                    <View >
                         <Images />
                    </View>
                         <View style={styles.space}></View>
                    </View>
                    <View style={styles.row}>
                        <Buttons name='INICIAR SESION'/>
                        
                        <Buttons name='REGISTRARSE'/>
                    </View>

                      
                
            </View>
        </Fragment>
    );
}

export default LogoStart;