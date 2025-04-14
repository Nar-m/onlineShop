import { useState } from "react"
import Boxmodal from "./Boxmodal"

const Slide = [
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic6.webp",
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic5.webp",
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic4.webp",
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic3.webp",
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic2.webp",
    "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic1.webp"
]
export default function Slides() {
    const [modalimg, setModalimg] = useState("")
    const [index, setIndexof] = useState(1)

    function Nextslider() {

        let curentindex = Slide.indexOf(modalimg)
        if (curentindex >= Slide.length - 1) {
            setModalimg(Slide[0])
            setIndexof(1)
        }
        else {
            let nextmodal = Slide[curentindex + 1]
            setModalimg(nextmodal)
            setIndexof(index + 1)
        }
    }
    function Prevslider() {
       
        let curentindex = Slide.indexOf(modalimg)
        if (curentindex <= 0) {
            setModalimg(Slide[Slide.length - 1])
            setIndexof(6)
        }
        else {
            let nextmodal = Slide[curentindex - 1]
            setModalimg(nextmodal)
            setIndexof(index - 1)
        }
    }

    function Hidemodal(){
        setModalimg("")
    }

    return (
        <>
            <div className="relative flex">
                {Slide.map((item, index) => {
                    return (
                        <div key={index}>
                            <img onClick={() => {
                                setModalimg(item)
                                setIndexof(index + 1)
                            }} src={item}></img>
                        </div>
                    )
                })}
            </div>
            {modalimg ? <Boxmodal
                modalimg={modalimg} i
                index={index}
                Slide={Slide}
                Nextslider={Nextslider}
                Prevslider={Prevslider}
                Hidemodal={Hidemodal}
            /> : ''}
        </>
    )
}