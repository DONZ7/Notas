import React, { Fragment } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import styles from './style';

const Images=(props)=>{
    const {photo} = props;
    return(
        <Fragment>
            <View>
                <Image source={{uri:photo}} style={styles.image}/>
               
            </View>
        </Fragment>
    );
}



export default Images;