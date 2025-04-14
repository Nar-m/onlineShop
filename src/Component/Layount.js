import { Link, Outlet } from "react-router-dom"
import './Header.css';
import jeweler2 from './jeweler2.svg'
import Login from "./Login";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./Cart";
import { Cartitems } from "./Cartcontent";

export default function Layount() {
    const { cartshow, setCart } = useContext(CartContext);
    const { count } = useContext(Cartitems);

    const [showLogin, setShowLogin] = useState(false);
    const [fiexed, setShowheader] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 100) {
                setShowheader(true)
            }
            else {
                setShowheader(false)
            }
        }
    }, [])
    return (
        <>
            <header className={fiexed ? 'active' : ''}>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <div style={{ marginTop: '8px', fontSize: '20px', cursor: 'pointer' }}>
                            <Link to="/"><i className="fa-solid fa-house"></i></Link>
                        </div>
                        <div>
                            <nav>
                                <ul className="flex  list-stayle-none">
                                    <li>
                                        <Link to="product">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="inspirations">inspirations</Link>
                                    </li>
                                    <li>
                                        <Link>about</Link>
                                    </li>
                                    <li>
                                        <Link>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <img style={{ cursor: 'pointer' }} src={jeweler2}></img>
                    </div>
                    <div className="flex items-center">
                        <span style={{ margin: '0 15px' }}>
                            <i onClick={() => setShowLogin(true)} style={{ fontSize: '20px' }} className="fa-regular fa-user"></i>
                        </span>
                        <span style={{ margin: '0 15px' }}>
                            <i style={{ fontSize: '20px' }} className="fa-regular fa-heart"></i>
                        </span>
                        <span className="relative" style={{ margin: '0 15px' }}>
                            <i style={{fontSize: '23px'}} onClick={() => setCart(!cartshow)} className="fa-solid fa-bag-shopping"></i>
                            <div style={{ width: '25px', borderRadius: '50%', color: 'white', left: '20px', bottom: '2px', top: '10px', textAlign: 'center', height: '25px', background: 'brown', position: 'absolute' }}>{count}</div>
                        </span>
                    </div>
                </div>
            </header>
            <Login showLogin={showLogin} setShowLogin={setShowLogin} />
            <Outlet />
        </>
    )
}