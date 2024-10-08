import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils"

import './navbar.styles.scss';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);

    return (
      <Fragment>
        <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/">
                    HOME
                </Link>
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                { currentUser ? (<span className="nav-link" onClick={signOutUser}> SIGN OUT </span>) :
                    (<Link className="nav-link" to="/auth"> SIGN IN </Link>)
                    
                }               
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default NavBar;