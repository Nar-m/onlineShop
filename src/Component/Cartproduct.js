import { useContext, useState, useEffect } from "react"
import { CartContext } from "./Cart"
import './cart.css';
import { Cartitems } from "./Cartcontent";
import Cartempty from "./Cartempty";
import Cartelement from "./Cartelement";
import Cartbotom from "./Cartbotom";

export default function Cartproduct() {
    const { cartshow, Hidecart } = useContext(CartContext)
    const { cartnow, count, setCount, setCartnow, Minuscount } = useContext(Cartitems)
    const [totael, seTotael] = useState(0);

    useEffect(() => {
        let quantitychange = cartnow.reduce((calc, item) => {
            return calc + item.price * item.quantity
        }, 0)
        seTotael(Math.ceil(quantitychange))
    })

    const Removeitem = (id) => {
        Minuscount()
        setCartnow((cartnow) => {
            const remove = cartnow.findIndex(item => {
                return item.id === id
            })
            if (remove !== -1) {
                cartnow.splice(remove, 1)
            }
            return [...cartnow]
        })
    }

    const ClearAll = () => {
        setCartnow([])
        setCount(0)
    }
    function Plusquantity(id) {
        let quantitychange = cartnow.find(item => item.id === id);
        if (quantitychange) {
            setCartnow(
                cartnow.map(item => {
                    return item.id === id ? { ...item, quantity: quantitychange.quantity + 1 } : item
                })
            )
        }
    }
    function Minusquantity(id) {
        let quantitychange = cartnow.find(item => item.id === id);
        if (quantitychange.quantity === 1) {
            setCartnow(
                cartnow.map(item => {
                    return item.id === id ? { ...item, quantity: quantitychange.quantity + 1 - 1 } : item
                })
            )
        }
        else {
            setCartnow(
                cartnow.map(item => {
                    return item.id === id ? { ...item, quantity: quantitychange.quantity - 1 } : item
                })
            )
        }
    }

    return (
        <div className={cartshow ? 'cartside open' : 'cartside'}>
            <div className="flex justify-between items-center p-5 border-b">
                <span onClick={Hidecart} style={{ fontSize: '35px', color: 'gray', cursor: 'pointer' }}>&times;</span>
                <div>
                    <i style={{ fontSize: '2em' }} className="fa-solid fa-bag-shopping"></i>
                    <span style={{ fontSize: '35px', marginLeft: '20px' }}>Cart</span>
                </div>
            </div>
            {cartnow.length === 0 ? <Cartempty /> : <Cartelement
                cartnow={cartnow}
                Removeitem={Removeitem}
                Plusquantity={Plusquantity}
                Minusquantity={Minusquantity}
            />}
            <Cartbotom ClearAll={ClearAll} totael={totael} />
        </div>
    )
}
