import React, { Fragment, useEffect,useState } from 'react';
import {View,ImageBackground} from 'react-native';
import styles from './style';
import { Header,Content } from '../../Organisms';
import {Actions} from 'react-native-router-flux';
import {getData} from './../../../hooks/firebase';


const Home =()=>{
  const [Data, setData] = useState([]);

   useEffect(()=>{ 
        itemsData();
    },[]);

    const itemsData=async()=>{ 
        let items=await getData();
        setData(items);
       // console.warn(Data);
    }
    
   const note ={
    title:'hola',
    paragraph:'Este es una prueba exitosa'
}

    return(
        <Fragment>
             <ImageBackground source={require('./../../../img/fondo.jpg')} style={styles.container}>
            <View style={styles.container}>
                 <Header/>
                 <Content Data={Data}/>  
            </View>
            </ImageBackground>
        </Fragment>
    );
}

export default Home;