import PostFeed from '../Components/PostFeed';
import Loader from '../Components/Loader';
import { firestore, postToJSON, getIt } from '../lib/firebase';
import { Timestamp, query, where, orderBy, limit, collectionGroup, getDocs, startAfter, getFirestore } from 'firebase/firestore';

import { useState } from 'react';

// mac post to query per page
const LIMIT = 1;

export async function getServerSideProps(context) {
  const ref = collectionGroup(getFirestore(), 'posts');
  const postQuery = query(
    ref,
    where('published', '==', true),
    orderBy('createdAt', 'desc'),
    limit(LIMIT),
  )
  
  const posts = (await getDocs(postQuery)).docs.map(postToJSON);

  return {
    props: {posts}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
  <Main>
   
  </Main>
  )
}
