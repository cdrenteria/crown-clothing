import FormInput from "../form-input/form-input.component";
import Button from "../button/button.componenet";
import { useState, useContext } from "react";
import { getFirestore } from "firebase/firestore";
import { auth, authenticateUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import { UserContext } from "../../contexts/user.context";


import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const logGoogleRedirectUser = async () => {
        await signInWithGoogleRedirect();
    }

    const logGooglePopupUser = async () => {
        const {user} = await signInWithGooglePopup();
        //const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
            const user = await authenticateUserWithEmailAndPassword( email, password );
            resetFormFields();
        } catch(err) {
           if( err.code == "auth/wrong-password" || err.code == "auth/user-not-found") {
            alert("Wrong password or email");
           }
            console.log("Sign In encountered and error." , err);
        }
    };

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormFields({...formFields, [name] : value});
    }

 return (

    <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="Username" 
                type="text" 
                name="email"
                required
                value={email}
                onChange={handleChange}
            />
            <FormInput 
                label="Password" 
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
                />
            <div className="buttons-container">
                <Button type="submit">Log In</Button>
                <Button style="google" onClick={logGoogleRedirectUser}>Sign In With Google</Button>
            </div>
        </form>
        
    </div>
 )
}

export default SignInForm;