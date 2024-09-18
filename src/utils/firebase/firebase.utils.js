import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN9QoXpsvZMCMhjnEnR2dXnYlnfdKAoU0",
  authDomain: "crown-clothing-db-e9d22.firebaseapp.com",
  projectId: "crown-clothing-db-e9d22",
  storageBucket: "crown-clothing-db-e9d22.appspot.com",
  messagingSenderId: "358997725293",
  appId: "1:358997725293:web:5ca70b400779f24eafaf64"
};

// Initialize libraries
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email, } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("There was an error creating the user.", error.message)
        }
    }
    
    return userDocRef;
}