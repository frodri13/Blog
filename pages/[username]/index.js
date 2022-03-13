import UserProfile from "../../Components/UserProfile"
import PostFeed from "../../Components/PostFeed"

export default function UserProfilePage({user, posts}){
    return(
        <main>
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </main>
    )
}