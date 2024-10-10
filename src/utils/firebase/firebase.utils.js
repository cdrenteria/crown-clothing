import { initializeApp } from "firebase/app";
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const authenticateUserWithEmailAndPassword =  async ( email, password ) => {
    if (!email || !password) return;
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

// Takes in a userAuth object to either read or create the user in the Firestore "users" collection
export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email, } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("There was an error creating the user.", error.message)
        }
    }
    
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}; 

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);