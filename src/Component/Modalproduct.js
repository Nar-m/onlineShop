import ReactDOM from "react-dom"
import './Modal.css';
import Modalcontent from "./Modalcontent";

export default function Modalproduct({ product, element, setElement }) {

    const Nextproduct = () => {
        let curentindex = product.indexOf(element)
        if (curentindex >= product.length - 1) {
            setElement(product[0])
        }
        else {
            let nextimg = product[curentindex + 1]
            setElement(nextimg)
        }
    }
    const Prevproduct = () => {
        let curentindex = product.indexOf(element)
        if (curentindex <= 0) {
            setElement(product[product.length - 1])
        }
        else {
            let nextimg = product[curentindex - 1]
            setElement(nextimg)
        }
    }

    return (
        ReactDOM.createPortal(
            <div className={element ? 'modal open' : 'modal'}>
                <span onClick={() => setElement("")} style={{ position: 'absolute', top: '20%', right: '1%', color: 'white', fontSize: '40px', fontWeight: 'bold', cursor: 'pointer' }}>
                    &times;
                </span>
                <i onClick={Prevproduct} className="fa-solid fa-chevron-left"></i>
                <div className="flex justify-around items-center p-10" style={
                    {
                        background: 'white',
                        transform: `translateY(${element ? '0' : '-200px'})`,
                        width: '70%',
                        transition: '0.3s all'
                    }}>
                    <Modalcontent element={element} />
                </div>
                <i onClick={Nextproduct} className="fa-solid fa-chevron-right"></i>
            </div>, document.getElementById("product-modal")
        )
    )
}