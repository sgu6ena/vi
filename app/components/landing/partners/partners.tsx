import React from 'react';
import styles from './partners.module.scss'
import {sponsors} from "@/app/components/landing/partners/partners.data";
import PartnersSlider from "@/app/components/landing/partners/slider/partnersSlider";



const Partners = () => {
    const randomSponsors = sponsors.sort(() => Math.random() - 0.5);
    const sponsors1 = randomSponsors.slice(0, 9)
    const sponsors2 = randomSponsors.slice(9, 18)
    const sponsors3 = randomSponsors.slice(18)

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
        <h2 >
          Партнеры
        </h2>

              <PartnersSlider items={sponsors1} autoplay={autoplay1}/>
              <PartnersSlider items={sponsors2} autoplay={autoplay2}/>
              <PartnersSlider items={sponsors3} autoplay={autoplay3}/>
          <img src={'/images/img_4.png'} alt="" className={styles.img1}/>
          <img src={'/images/img_5.png'} alt="" className={styles.img2}/>
          <img src={'/images/img_6.png'} alt="" className={styles.img3}/>
          <img src={'/images/img_7.png'} alt="" className={styles.img4}/>
      </section>

    );
};

export default Partners;