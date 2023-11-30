'use client';
import React from 'react';
import styles from './partners.module.scss'
import PartnersSlider from "@/app/components/landing/partners/slider/partnersSlider";
import {useSponsors} from "@/app/hooks/useSponsors";

import dynamic from "next/dynamic";

const DynamicSnow = dynamic(() => import('../../ui/snow/snow').then(m => m.default), {
    ssr: false,
})
const Partners = () => {

  const {sponsors1, sponsors2, sponsors3} = useSponsors()

  const autoplay1 = {
    delay: 3500,
    disableOnInteraction: false,
    waitForTransition: true,
  }

  const autoplay2 = {
    delay: 1500,
    disableOnInteraction: false,
    reverseDirection: true,
    waitForTransition: true

  }
  const autoplay3 = {
    delay: 2400,
    disableOnInteraction: false,
    waitForTransition: true
  }


  return (
    <section id={'partners'} className={styles.partners}>
        <DynamicSnow/>
      <img src={'/images/img_4.png'} alt="" className={styles.img1}/>
      <img src={'/images/img_5.png'} alt="" className={styles.img2}/>
      <img src={'/images/img_6.png'} alt="" className={styles.img3}/>
      <img src={'/images/img_7.png'} alt="" className={styles.img4}/>
      <h2>
        Партнеры
      </h2>

      <PartnersSlider items={sponsors1} autoplay={autoplay1}/>
      <PartnersSlider items={sponsors2} autoplay={autoplay2}/>
      <PartnersSlider items={sponsors3} autoplay={autoplay3}/>

    </section>

  );
};

export default Partners;