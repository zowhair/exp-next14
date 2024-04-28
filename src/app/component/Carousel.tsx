// Import Swiper React components
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import styles from "/public/styles/custom.module.css";
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Carousel() {
    const [images, setImages] = useState([])


    const carouselElements = [
        "/images/KN3A8259.jpg",
        "/images/heli/1.JPG",
        "/images/nangaparbet-iin.jpg",
        "/images/heli/3.JPG",
        "/images/heli/8.JPG",
        "/images/taxila.jpg",
        "/images/Rakaposhi.jpg",
        "/images/k2/DSC_3563.JPG"
    ]
    return (
        <>
            <CarouselImages carouselElements={carouselElements} />
        </>
    )
}

function CarouselImages({carouselElements}) {
    return (
        <>
            <Swiper className={styles.mySwiper}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                height={600}
            >
                {/* {images.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} >
                        <img src={'http://localhost:1337' +data.attributes.formats.large.url} />
                    </SwiperSlide>

                })} */}

                {carouselElements.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} key={data} >
                        <Image src={data} width={500} height={500} alt="slider image" src-set={data} loading="lazy" />
                    </SwiperSlide>

                })}

            </Swiper>
        </>
    )
}