import firebase from 'firebase';
require('firebase/firestore');

import { firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const firebaseAuth=firebase.auth();
///const firebaseDatabase=firebase.database();

export { firebaseAuth,storage,db,firebase };