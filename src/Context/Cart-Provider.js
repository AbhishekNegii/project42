import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider=(props)=>{
    const [items,setItems]=useState([])

    
    const addItemHandler=(item)=>{
        const data=[...item,item]

        setItems(data)

    }

    const cartContext={
        item:items,
        addItem:addItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider