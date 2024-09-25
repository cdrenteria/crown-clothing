import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.componenet";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => setFormFields(defaultFormFields);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //password match
        if (password !== confirmPassword) {
            alert("displayName and password do not match;");
            return;
        };    
        try {
            //check authenticated user with email and password
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            //create userdoc
            const userDoc = await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(err) {
            if( err.code == "auth/email-already-in-use") alert("email already in use");
            console.log("User creation encountered and error." , err);
        }
    };

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormFields({...formFields, [name] : value});
    }

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    id="displayName"
                    value={displayName}
                />
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    id="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    id="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    id="confirmPassword"
                    value={confirmPassword}
                />
                <Button style="google" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUp;