'use client'
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/navigation'
import { Text } from './Text';

// register Swiper custom elements
register();

export default function PartnersCarousel() {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: false,
        pagination: false,
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);
  
    const dataLogo = [
        '/images/logos/Expo_2020.png',
        '/images/logos/itbberlin.jpg',
        '/images/logos/logo-top.png',
        '/images/logos/wtmlondon.jpg',
        '/images/logos/Expo_2020.png',
        '/images/logos/itbberlin.jpg',
        '/images/logos/logo-top.png',

    ]
    return (

        <div className='partners-carousel'>
            
            <swiper-container className="" ref={swiperRef} init="false" slides-per-view="3" loop="true" autoplay > 
                {dataLogo.map(data => {
                    return <swiper-slide>
                            <img className='partners logo' width="100" src={data} />
                        </swiper-slide>
                })}
            </swiper-container>
        </div>
    )
}