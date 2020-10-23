/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Fragment,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Alert
} from 'react-native';

import Routers from './routers';
import {firebase} from './src/Components/Atoms'
import FlashMessage from "react-native-flash-message";

import messaging from '@react-native-firebase/messaging';

const App = () => {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(
      async remoteMessage => {
      console.log('Bienvenido a nuestra apps!', remoteMessage);
    },);

    const topicSubscriber=messaging()
    .subscribeToTopic('Doney')
    .then(()=>console.log('hola este es una prueba'));

   const backgroundSubcriber= messaging().setBackgroundMessageHandler(
     async remoteMessage => {
      console.log('Hola un gusto saludarte!', remoteMessage);
    },);

    return ()=>{
    unsubscribe();
    topicSubscriber();
    backgroundSubcriber();
  }
  }, []);

  return (
    <Fragment>
      <View style={styles.scrollView}>
        
        <Routers/>
        <FlashMessage position="top" />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor: 'red',
  }
});

export default App;

/*var firebaseConfig = {
  apiKey: "AIzaSyA4AlXVs1oCBIZowVF7podLwUMvCulRHiA",
  authDomain: "onesignalfacebook.firebaseapp.com",
  databaseURL: "https://onesignalfacebook.firebaseio.com",
  projectId: "onesignalfacebook",
  storageBucket: "onesignalfacebook.appspot.com",
  messagingSenderId: "548878805925",
  appId: "1:548878805925:web:5fc50bac22aa3f22c3d64c",
  measurementId: "G-GD011VETGH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/