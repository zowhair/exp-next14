'use client'
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/navigation'
import { Text } from './Text';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'

// register Swiper custom elements
register();

export default function PartnersCarousel() {
    const swiperRef = useRef(null);

    // useEffect(() => {
    //   const swiperContainer = swiperRef.current;
    //   const params = {
    //     navigation: false,
    //     pagination: false,
    //   };
  
    //   Object.assign(swiperContainer, params);
    //   swiperContainer.initialize();
    // }, []);
  
    const dataLogo = [
        {
            url: '/images/logos/Expo_2020.png',
            alt: "Expedition Asia partnered with Germany Expo"
        },
        {
            url: '/images/logos/itbberlin.jpg',
            alt: "Expedition Asia Partnered with ITB Berlin"
        },
        {
            url: '/images/logos/logo-top.png',
            alt: "Expedition Asia partner with Expo Dubai "
        },
        {
            url: '/images/logos/Expo_2020.png',
            alt: "Expedition Asia partnered with Germany Expo"
        },
        {
            url: '/images/logos/itbberlin.jpg',
            alt: "Expedition Asia Partnered with ITB Berlin"
        },
        {
            url: '/images/logos/logo-top.png',
            alt: "Expedition Asia partner with Expo Dubai "
        },
        {
            url: '/images/logos/wtmlondon.jpg',
            alt: "Expedition Asia partnered with World Travel Market"
        },
        
    ]
    return (

        <div className='partners-carousel'>
            <div className='partners__title'>
                <h3>Our Partners</h3>
            </div>
            
            {/* <swiper-container className="" ref={swiperRef} init="false" slides-per-view="3" loop="true" autoplay > 
                {dataLogo.map(data => {
                    return <swiper-slide key={data}>
                            <Image className='partners logo'  src={data} width={500} height={500} alt="imaeg" />
                        </swiper-slide>
                })}
            </swiper-container> */}

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay
                >
                {dataLogo.map((data, index) => {
                    return <SwiperSlide key={index}>
                            <Image className='partners logo'  src={data.url} width={500} height={100} alt={data.alt} />
                            </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}