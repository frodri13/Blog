import PostFeed from '../Components/PostFeed';
import Loader from '../Components/Loader';
import {  postToJSON } from '../lib/firebase';
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



export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

  

    const cursor = typeof last.createdAt === 'number' ? Timestamp.fromMillis(last.createdAt) : last.createdAt;
    
    const ref = collectionGroup(getFirestore, 'posts');
    const postsQuery = query(
      ref, 
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      startAfter(cursor),
      limit(LIMIT),
    )

    const newPosts = (await getDocs(postsQuery)).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
 
  }


  return (
  <main>
    <PostFeed posts = {posts} />

    {!loading && !postsEnd && <button onClick={getMorePosts}>Load More</button> }
   
    <Loader show={loading} />

    {postsEnd && 'You have reached the end'}
  </main>
  )
}
