import SignUp from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";
import "./authentication.styles.scss"

const Authentication = () => {


    return (
        <div>
            <div className="authenticaiton-container">
                <SignInForm/>
                <SignUp />
            </div>
            
        </div>
    )
}

export default Authentication;