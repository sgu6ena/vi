'use client';
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/autoplay'
import {Autoplay} from "swiper/modules";
import {ISponsorSlider} from "@/app/components/landing/partners/partners.intefaces";
import styles from './slider.module.scss'
const BREAKPOINTS = {

    320: {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000
    },

    480: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 2000
    },

    640: {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 2000
    },
    900: {
        slidesPerView: 5,
        spaceBetween: 10,
        speed: 2000
    },
    1024: {
        slidesPerView: 6,
        spaceBetween: 10,
        speed: 2000
    },
    1280: {
        slidesPerView: 7,
        spaceBetween: 10,
        speed: 2000
    }
}

const PartnersSlider = ({items, autoplay}: ISponsorSlider) => {

    return (
        <div className={styles.wrapper}>
        <Swiper
            breakpoints={BREAKPOINTS}
            autoplay={autoplay}
            observer={true}
            loop={true}
            modules={[Autoplay]}

        >
            {items.map(item => (
                <SwiperSlide key={item.link}>
                    <div className={styles.item}>
                        <a href={item.link}>
                            <img width="150" height="80" src={'//1415.idc.md' + item.img} alt={item.title}/>
                        </a>
                    </div>

                </SwiperSlide>))}
        </Swiper>
        </div>
    );
};

export default PartnersSlider;