import React, { Fragment, useEffect } from 'react';
import {View,ImageBackground} from 'react-native';
import styles from './style';
import { Header,Content } from '../../Organisms';
import {Actions} from 'react-native-router-flux';
import {getData} from './../../../hooks/firebase';


const Home =()=>{
/*
   useEffect(()=>{ 
        itemsData();
    },[]);

    const itemsData=async()=>{ 
        let items=await getData();
        console.warn(items);
    }
    */
   const note ={
    title:'hola',
    paragraph:'Este es una prueba exitosa'
}

    return(
        <Fragment>
             <ImageBackground source={require('./../../../img/fondo.jpg')} style={styles.container}>
            <View style={styles.container}>
                 <Header/>
                 <Content note={note}/>  
            </View>
            </ImageBackground>
        </Fragment>
    );
}

export default Home;