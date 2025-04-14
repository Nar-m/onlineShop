import { useState } from "react"

export default function Sliderinspitations() {
    const [curentIndex, setCurentindex] = useState(0);

    const Slidimg = [
        {
            name: 'Jane Swanson',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic6.webp'
        },
        {
            name: 'Rhoncus ipsum odio massa tristique.',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic5.webp'
        },
        {
            name: 'Cursus convallis placerat sene victus orne',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic4.webp'
        },
        {
            name: 'Facilisi volutpat dapibus nostra etiam metus',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic3.webp'
        },
        {
            name: 'Facilisi volutpat dapibus nostra etiam metus',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic2.webp'
        },
        {
            name: 'Facilisi volutpat dapibus nostra etiam metus',
            img: 'https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic1.webp'
        }
    ]

    return (
        <div className="flex  items-center">
            {Slidimg.map((item, index) => {
                return (
                    <div onClick={() => setCurentindex(index)} className="relative" style={{
                        flex: `${curentIndex === index ? '5' : '0.5'}`,
                        transition: '0.5s all'
                    }} key={index}>
                        <img style=
                            {{
                                borderRadius: '8px',
                                height: '680px'
                            }} src={item.img}></img>
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            opacity: `${curentIndex === index ? '1' : '0'}`,
                            transition: '0.4s all',
                        }}>
                            <h1 style={{ color: 'white', fontSize: '26px', fontWeight: 'bold' }}>{item.name}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}