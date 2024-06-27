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
        "/images/carousel/1.webp",
        "/images/carousel/4.webp",
        "/images/carousel/5.webp",
        "/images/carousel/6.webp",
        "/images/carousel/parbet-in.webp"
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