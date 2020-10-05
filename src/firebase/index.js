import firebase from 'firebase';
import 'firebase/firestore';
//import 'firebase/auth';

//import { firebaseConfig} from "./config";
const firebaseConfig = {
    apiKey: "AIzaSyA4AlXVs1oCBIZowVF7podLwUMvCulRHiA",
    authDomain: "onesignalfacebook.firebaseapp.com",
    databaseURL: "https://onesignalfacebook.firebaseio.com",
    projectId: "onesignalfacebook",
    storageBucket: "onesignalfacebook.appspot.com",
    messagingSenderId: "548878805925",
    appId: "1:548878805925:web:5fc50bac22aa3f22c3d64c",
    measurementId: "G-GD011VETGH"
    };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const firebaseAuth=firebase.auth();
///const firebaseDatabase=firebase.database();

export { firebaseAuth,storage,db};