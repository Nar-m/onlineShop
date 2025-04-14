import { createContext, useState } from "react";

export const CartContext = createContext()

export default function Cart({ children }) {
    const [cartshow, setCart] = useState(false);

    function Hidecart() {
        setCart(false)
    }
    return <CartContext.Provider value={{ cartshow, setCart, Hidecart }}>{children}</CartContext.Provider>
}