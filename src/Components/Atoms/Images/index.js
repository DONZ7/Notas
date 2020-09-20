import React, { Fragment } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import styles from './style';

const Images=()=>{
    const photo = 'https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.0-9/119905433_3378616718861430_3786125233650877023_n.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=oB9M-OhDlrEAX_s0gqR&_nc_ht=scontent.ftgu2-2.fna&oh=fa9cb82bbc5295974cba54f5de1b5743&oe=5F8C2B72';
    return(
        <Fragment>
            <View>
                <Image source={{uri:photo}} style={styles.image}/>
               
            </View>
        </Fragment>
    );
}



export default Images;