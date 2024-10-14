import { createContext, useState } from "react";


export const CartContext = createContext({
    isOpen : null,
    products: [ ]
});

export const CartProvider = ({ children }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ products, setProducts ] = useState(null);

    const value = { isOpen, setIsOpen, products};

    return (
        <CartContext.Provider value={ value }> { children } </CartContext.Provider>
    )
};