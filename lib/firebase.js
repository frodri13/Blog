import {getApp, initializeApp}  from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, collection, where, getDocs, query, limit} from 'firebase/firestore';
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDVZGl-9F5TqZh4NKDwJQbeXqCnzH_tSjY",
    authDomain: "blog-b3bc3.firebaseapp.com",
    projectId: "blog-b3bc3",
    storageBucket: "blog-b3bc3.appspot.com",
    messagingSenderId: "897042580983",
    appId: "1:897042580983:web:7ed869f41e156267b69af2",
    measurementId: "G-VZRBQK3QH2"
  };

  function createFirebaseApp(firebaseConfig) {
    try {
      return getApp();
    } catch {
      return initializeApp(firebaseConfig);
    }
  }

  const firebaseApp = createFirebaseApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);
  export const googleAuthProvider = new GoogleAuthProvider();
//   export const googleAuthProvider = new firebase.auth.googleAuthProvider();

  export const firestore = getFirestore(firebaseApp);
  export const storage = getStorage(firebaseApp);
  