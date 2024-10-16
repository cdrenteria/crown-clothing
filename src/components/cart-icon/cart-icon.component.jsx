import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";



const CartIcon = () => {
    const { isOpen, setIsOpen } = useContext(CartContext);

    const cartIconHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="cart-icon-container" onClick={cartIconHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;