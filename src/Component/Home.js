import { Images } from "./images";
import Slider from "./Slider";
import Arrow from "./Arrow";
import { useState } from "react";
import Slidtext from "./Slidetext";
import './Slider.css';
import Exclusive from "./Exclusive";
import Fixed from "./Fixed";
import Inter from "./Inter";
import Carusel from "./Carusel";
import Slides from "./Slides";

export default function Home() {
    const [curentindex, setCurentindex] = useState(1);

    return (
        <>
            <section>
                <Fixed />
                <div style={{ padding: '30px 200px' }} className="flex justify-around border-b-2  items-center">
                    <Exclusive />
                    <div className="image-conteiner border-2" style={{ maxWidth: '580px', zIndex: '-1', overflow: 'hidden', width: '100%', top: '0', position: 'relative', height: '680px' }}>
                        {Images.map((item, index) => {
                            return <Slider curentindex={curentindex === index + 1} item={item} key={index} />
                        })}
                    </div>
                    <div className="flex justify-between items-center flex-col">
                        <div>
                            {Images.map((item, index) => {
                                return <Slidtext
                                    curentindex={curentindex === index + 1}
                                    key={index} item={item} />
                            })}
                        </div>
                        <div>
                            <Arrow
                                Images={Images}
                                curentindex={curentindex}
                                setCurentindex={setCurentindex}
                            />
                        </div>
                    </div>
                </div>
                <Slides />
                <Inter />
                <Carusel />
            </section>
        </>
    )
}