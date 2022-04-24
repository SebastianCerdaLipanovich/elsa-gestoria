import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(item, cantidad) {
        if (isInCart(item.id)){
            let index = cart.findIndex(element => element.item.id === item.id)
            cart[index].cantidad = cart[index].cantidad + cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {item, cantidad}])
        }
    };

    function isInCart(id){
        let result = cart.find(element => element.item.id === id);
        if (result === undefined){
            return false;
        }else{
            return true;
        }

    }
    function removeFromCart(id) {
        setCart([cart.filter(element => element.id !== id)])
    }

    function clear() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clear }}>
            {children}
        </CartContext.Provider>
    );
};



