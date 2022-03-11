import {auth, firestore} from '../lib/firebase'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot, getFirestore } from 'firebase/firestore';

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUserName] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(getFirestore(), 'users', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setUserName(doc.data()?.username);
      });
    } else {
      setUserName(null);
    }

    return unsubscribe;

  }, [user]);

  return {user, username};
}