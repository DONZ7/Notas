import React, { Fragment } from 'react';
import {View,Text} from 'react-native';
import styles from './style';
import { Header,Content } from '../../Organisms';
import {Actions} from 'react-native-router-flux';

const Home =()=>{
    return(
        <Fragment>
            <View style={styles.container}>
                 <Header/>
                 <Content/>  
            </View>
        </Fragment>
    );
}

export default Home;