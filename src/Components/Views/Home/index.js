import React, { Fragment, useEffect,useState } from 'react';
import {View,ImageBackground} from 'react-native';
import styles from './style';
import { Header,Content } from '../../Organisms';
import {Actions} from 'react-native-router-flux';
import {getData} from './../../../hooks/firebase';
import auth from '@react-native-firebase/auth';

const Home =()=>{
  const [Data, setData] = useState([]);
  const [UserName, setUserName] = useState('');

  let user = auth().currentUser;
/*if (user) {
console.warn('User email: ', user.uid);
}*/


   useEffect(()=>{ 
        itemsData();
    },[]);

    const itemsData=async()=>{ 
        let items=await getData();
        setData(items);
        console.warn(user.displayName)
    }

    return(
        <Fragment>
             <ImageBackground source={require('./../../../img/fondo.jpg')} style={styles.container}>
            <View style={styles.container}>
                 <Header />
                 <Content Data={Data}/>  
            </View>
            </ImageBackground>
        </Fragment>
    );
}

export default Home;