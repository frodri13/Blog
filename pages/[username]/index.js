import UserProfile from "../../Components/UserProfile";
import PostFeed from "../../Components/PostFeed";
import { getUserWithUsername} from "../../lib/firebase"
import { getDocs, getFirestore } from "firebase/firestore";

export async function getServerSideProps({query: urlQuery}){
    const {username} = urlQuery;

    const userDoc = await getUserWithUsername(username);

    // if no user, short circuit to 404 page
    // if (!userDoc) {
    //     return {
    //         notFound: true;
    //     }
    // }

    // JSON serializable data
    let user = null;
    let posts = null;

    if(userDoc) {
        user = userDoc.data();

        const postsQuery = query(
            collection(getFirestore(), userDocs.ref.path, 'posts'),
            where('published', '==', true),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        posts = ( await getDocs(postsQuery)).docs.map(postToJSON);
    }

    return {
        props: { user, posts }, //will be passed to the page component as props
    };
}

export default function UserProfilePage({user, posts}){
    return(
        <main>
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </main>
    )
}