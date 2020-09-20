//import firebase from "firebase/app";
import * as firebase from 'firebase';
import "firebase/storage";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
//const database = firebase.firestore();
const firebaseAuth=firebase.auth();
const firebaseDatabase=firebase.database();
export { firebaseAuth,storage, firebaseDatabase };