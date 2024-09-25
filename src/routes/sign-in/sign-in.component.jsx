import SignUp from "../../components/sign-up-form/sign-up-form.components";

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGooglePopupUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>
            <SignUp />
        </div>
    )
}

export default SignIn;