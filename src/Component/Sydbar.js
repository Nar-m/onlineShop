import Sydbarcontent from "./Sydbarcontent"
import { Sideitem } from "./Sideitem"
import { useState } from "react"
import Sydbarcategory from "./Sydbarcategory"

export default function Sydbbar({ sydebar, Hidesydbar }) {
    const [category, shoWcategory] = useState(null);
    const [showside, seshowside] = useState(false);

    const Lookcategory = (text) => {
        seshowside(true)
        shoWcategory(text)
    }

    return (
        <div style={{
            width: `${showside ? '45vw' : '18vw'} `
        }} className={sydebar ? 'sidebar show' : 'sidebar'}>
            <span onClick={() => {
                seshowside(false);
                shoWcategory(null)
                Hidesydbar()
            }} style={{ position: 'absolute', color: 'black', fontSize: '38px', cursor: 'pointer', top: '0', right: '0' }}>&times;</span>
            <div className="border-r">
                {Sideitem.map((item, index) => {
                    return <Sydbarcontent item={item} Lookcategory={Lookcategory} key={index} />
                })}
            </div>
            {category ? <Sydbarcategory category={category} /> : ''}
        </div>
    )
}