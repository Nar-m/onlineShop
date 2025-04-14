import { createContext, useState, useEffect } from "react";


export const Cartitems = createContext();

export default function Cartcontent({ children }) {
    const [cartnow, setCartnow] = useState([]);
    const [count, setCount] = useState(0);



    function AddtoCart(product, id) {
        let newcart = { ...product, quantity: 1 }
        let cartitems = cartnow.findIndex(item => item.id === id);


        if (cartitems !== -1) {

            const newitems = [...cartnow].map(item => {
                return item.id === id ? { ...item, quantity: cartitems.quantity + 1 } : item
            })
            setCartnow(newitems)
            localStorage.setItem("cart", JSON.stringify(newitems))
        }
        else {
            setCount(count + 1)
            setCartnow([...cartnow, newcart])
            localStorage.setItem("cart", JSON.stringify(newcart))
        }
    }
    function Minuscount() {
        setCount(count - 1)
    }


    return <Cartitems.Provider
        value=
        {{
            count, setCount, cartnow, setCartnow, AddtoCart, Minuscount
        }}>{children}</Cartitems.Provider>
}