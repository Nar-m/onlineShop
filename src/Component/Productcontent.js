import { useState, useContext } from "react"
import Modalproduct from "./Modalproduct"
import { Cartitems } from "./Cartcontent"

export default function Productcontent({ product, item }) {
    const [element, setElement] = useState("");
    const { AddtoCart } = useContext(Cartitems)

    const { title, price, image, category, id } = item

    const Downloadimg = () => {
        fetch(image).then(images => images.blob()).then(file => {
            let a = document.createElement('a');
            a.href = URL.createObjectURL(file)
            a.download = new Date().getDate();
            a.click();
            document.body.appendChild(a)
        })
    }

    return (
        <>
            <div className="wrapper">
                <div className="product-navigation">
                    <i onClick={Downloadimg} className="fa-solid fa-download"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i onClick={() => {
                        setElement(item)
                    }} className="fa-regular fa-eye"></i>
                </div>
                <div>
                    <img src={image}></img>
                </div>
                <div>
                    <h2 style={{ fontSize: '22px', fontWeight: '400' }}>{title}</h2>
                </div>
                <div>
                    <span style={{ fontSize: '18px', color: 'red' }}>{price}$</span>
                </div>
                <div>
                    <span>{category}</span>
                </div>
                <button onClick={() => {
                    AddtoCart(item, id)
                }} style={{ padding: '12px 35px', background: '#bb5644', marginTop: '10px', color: 'white', borderRadius: '8px' }}>Add to Carts</button>
            </div>
            <Modalproduct product={product} element={element} setElement={setElement} />
        </>
    )
}