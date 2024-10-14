import "./cart-dropdown.styles.scss";
import Button from "../button/button.componenet";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
//import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

const CartDropdown = () => {
    //const {isOpen, products} = useContext(CartDropdownContext);
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;