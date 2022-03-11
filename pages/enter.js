import {auth, firestore, googleAuthProvider} from "../lib/firebase"
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth';
import { useContext } from "react";
import { UserContext } from "../lib/context";

// 1. user signed out <SignInButton />
// 2. user signed in, but missing username <UsernameForm />
// 3. user signed in, has username <SignOutButton />

export default function EnterPage({}) {
    const {user, username} = useContext(UserContext);


    return(
        <main>
            {user ?
                !username ? <UserNameForm /> : <SingOutButton />
            :
                <SingInButton />}
        </main>
    )
}

// Sign in with Gogle Button
function SingInButton() {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider);
    }

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'}/> Sign in with Google
        </button>
    )
}

// Sign out button
function SingOutButton() {
    return <button onClick={() => signOut(auth)}>Sign Out</button>
}

function UserNameForm() {
    
}