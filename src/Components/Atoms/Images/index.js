import React, { Fragment } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import styles from './style';

const Images=()=>{
    const photo = 'https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg';
    return(
        <Fragment>
            <View>
                <Image source={{uri:photo}} style={styles.image}/>
               
            </View>
        </Fragment>
    );
}



export default Images;