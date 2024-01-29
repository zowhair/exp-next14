// Import Swiper React components
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import styles from "/public/styles/custom.module.css";
import { useEffect, useState } from 'react';


export default function Carousel() {
    const [images, setImages] = useState([])


    const carouselElements = [
        "/images/KN3A8259.jpg",
        "/images/DSC_2985.JPG",
        "/images/Rakaposhi.jpg"
    ]

    /*
    useEffect(() => {
        (async () => {
            fetch('http://127.0.0.1:1337/api/carousels?populate=*')
            .then((resp) => resp.json())
            .then((data) => setImages(data.data[0].attributes.images.data))
        })()
    }, [])
    // console.log({images})
    images.map((data) => console.log('http://localhost:1337' +data.attributes.formats.large.url))
    */
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
                height="600px"
            >
                {/* {images.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} >
                        <img src={'http://localhost:1337' +data.attributes.formats.large.url} />
                    </SwiperSlide>

                })} */}

                {carouselElements.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} >
                        <img src={data} />
                    </SwiperSlide>

                })}

            </Swiper>


        </>
    )
}