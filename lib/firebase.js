import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDVZGl-9F5TqZh4NKDwJQbeXqCnzH_tSjY",
    authDomain: "blog-b3bc3.firebaseapp.com",
    projectId: "blog-b3bc3",
    storageBucket: "blog-b3bc3.appspot.com",
    messagingSenderId: "897042580983",
    appId: "1:897042580983:web:7ed869f41e156267b69af2",
    measurementId: "G-VZRBQK3QH2"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
  