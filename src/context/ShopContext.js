import React, { createContext, useState } from 'react'
import products from "../products.json"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let n = products.length + 1
    let cart = {};
    for(let i = 1; i < n;  i++){
        cart[i] =0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const contextValue = {cartItem, addToCart, removeFromCart}
    console.log(cartItem)


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
