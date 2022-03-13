import UserProfile from "../../Components/UserProfile"
import PostFeed from "../../Components/PostFeed"

export async function getServerSideProps({query: urlQuery}){
    const {username} = urlQuery;

    const userDoc = await getUserWithUsername(username);

    // if no user, short circuit to 404 page
    // if (!userDoc) {
    //     return {
    //         notFound: true;
    //     }
    // }

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