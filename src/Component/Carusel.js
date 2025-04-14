import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Modaimg from './Modalimg';

export default function Carusel() {
    const [modal, setModal] = useState(null)

    const Images = [
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic6.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic5.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic4.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic3.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic2.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-gallery-pic1.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-home-pic2.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-home-pic1.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-product-pic2.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-product-pic6.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-product-pic1.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-product-pic8.webp",
        "https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2-product-pic3.webp"
    ]
    return (
        <>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.next-arrow',
                        prevEl: '.prev-arrow'
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className='relative'>
                        {Images.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='relative'>
                                        <img onClick={() => setModal(item)} key={index} src={item}></img>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </div>
                    <div>
                        <div className='next-arrow' style={{ position: 'absolute', right: '0', bottom: '45%', zIndex: '1' }}>
                            <i style={{ padding: '20px', background: 'white', borderRadius: '50%', fontSize: '18px' }} className="fa-solid fa-caret-right"></i>
                        </div>
                        <div className='prev-arrow' style={{ position: 'absolute', left: '0', bottom: '45%', zIndex: '1' }}>
                            <i style={{ padding: '20px', background: 'white', borderRadius: '50%', fontSize: '18px' }} className="fa-solid fa-caret-left"></i>
                        </div>
                    </div>
                </Swiper>
            </div>
            <Modaimg Images={Images} modal={modal} setModal={setModal} />
        </>
    )
}