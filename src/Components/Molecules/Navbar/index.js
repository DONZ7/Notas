import React, { Fragment } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Icon} from '../../Atoms';
import styles from './style';

const Navbar=()=>{
    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                    <Icon/>
                    <Icon/>
                </View>
                    <View >
                        <Text style={styles.text}>Titulo</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </View>
                    
               

            </View>
        </Fragment>
    );
}

export default Navbar;