import React from 'react';
import styles from './partners.module.scss'


import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import {Autoplay} from "swiper/modules";

interface ISponsor{
    link:string
    title:string
    img:string
}
const sponsors:ISponsor[] = [
    {
        link: 'https://instagram.com/belcosmetik_pmr?igshid=MDM4ZDc5MmU=',
        title: 'Фирменный магазин «Косметика Беларуси»',
        img: '/images/sponsors/belkosmetika.png'
    },
    {
        link: 'https://shop.belar.md/',
        title: 'Магазин «Cosmetic Shop»',
        img: '/images/sponsors/cosmetics_shop3.png'
    },
    {
        link: 'https://instagram.com/danilova.beauty.family?igshid=MDM4ZDc5MmU=',
        title: 'Салон красоты «Danilova beauty family»',
        img: '/images/sponsors/danilova.png'
    },
    {
        link: 'https://www.instagram.com/mushinskaia_salon/?igshid=YmMyMTA2M2Y%3D',
        title: 'Салон красоты Инны Мушинской',
        img: '/images/sponsors/inna_mushinskaya.png'
    },
    {
        link: 'https://instagram.com/viva.optica?igshid=MDM4ZDc5MmU=',
        title: 'ВиваОптика',
        img: '/images/sponsors/VivaOptica.png'
    },
    {
        link: 'https://instagram.com/sultan.pmr?igshid=MWI4MTIyMDE',
        title: 'Магазин восточных сладостей «Sultan»',
        img: '/images/sponsors/sultan.png'
    },
    {
        link: 'https://www.instagram.com/in_kharchenko/',
        title: 'Мастерская сыра Игоря Харченко',
        img: '/images/sponsors/masterskaya_sira.png'
    },
    {
        link: 'https://instagram.com/coffee.turka?igshid=YmMyMTA2M2Y=',
        title: 'Кофейня «Turka»',
        img: '/images/sponsors/Turka.png'
    },
    {
        link: 'https://instagram.com/lovesushi_pmr?igshid=MDM4ZDc5MmU=',
        title: 'Online-ресторан «LOVE SUSHI»',
        img: '/images/sponsors/Love_sushi.png'
    },
    {
        link: 'https://instagram.com/585zolotoy.pmr?igshid=MDM4ZDc5MmU=',
        title: 'Магазин ювелирных изделий «585*Золотой»',
        img: '/images/sponsors/585_zolotoy.png'
    },
    {
        link: 'https://www.instagram.com/aureolaonline/',
        title: 'Магазин ювелирных изделий «Ауреола»',
        img: '/images/sponsors/Aureola.png'
    },
    {
        link: 'http://adrenalin-fitness.ru/',
        title: 'Тренажерный зал «Adrenalin»',
        img: '/images/sponsors/adrenalin.png'
    },
    {
        link: 'https://instagram.com/hammer_pmr?igshid=YmMyMTA2M2Y=',
        title: 'Тренажерный зал «Hammer»',
        img: '/images/sponsors/hummer.png'
    },
    {
        link: 'https://instagram.com/borntofly_ropejump?igshid=YmMyMTA2M2Y=',
        title: 'Роуп-джампинг «BORNTOFLY»',
        img: '/images/sponsors/Born_to_fly.png'
    },
    {
        link: 'https://www.instagram.com/fitness_mafia_pmr/',
        title: 'Тренажерный зал «Reforma»',
        img: '/images/sponsors/Reforma.png'
    },
    {
        link: 'http://lionsarena.md/',
        title: 'Спорткомплекс «Lions Arena»',
        img: '/images/sponsors/Lions-Arena.png'
    },
    {
        link: 'https://www.instagram.com/kvint1897/',
        title: 'Тираспольский винно-коньячный завод «KVINT»',
        img: '/images/sponsors/Kvint.png'
    },
    {
        link: 'https://www.facebook.com/profile.php?id=100056541733911',
        title: 'Завод «Букет Молдавии»',
        img: '/images/sponsors/buket_moldavii.png'
    },
    {
        link: 'https://www.instagram.com/kislov_wine/',
        title: 'Винное хозяйство «Кисловъ»',
        img: '/images/sponsors/kislov.png'
    },
    {
        link: 'https://www.levin.md/',
        title: 'Ресторан – Винотека «Levin»',
        img: '/images/sponsors/levin.png'
    },
    {
        link: 'https://tiraet.com/company/index.php',
        title: 'Центр электроники «ТирАЭТ»',
        img: '/images/sponsors/tiraet.png'
    },
    {
        link: 'https://instagram.com/lovecrosss',
        title: 'Магазин спортивной обуви «Lovecross»',
        img: '/images/sponsors/Lovecross.png'
    },
    {
        link: 'https://instagram.com/brend_pmr?igshid=MDM4ZDc5MmU=',
        title: 'Магазин одежды «Brend_pmr',
        img: '/images/sponsors/brand_pmr.png'
    },
    {
        link: 'https://www.instagram.com/tveerdo/',
        title: 'Кожаные изделия ручной работы «Tveerdo»',
        img: '/images/sponsors/tveerdo.png'
    },
    {
        link: 'http://instagram.com/friends.family.market',
        title: 'Магазин спортивной одежды и обуви «Friends & family»',
        img: '/images/sponsors/FF.png'
    },
    {
        link: 'https://www.instagram.com/stock_holm_pmr/?igshid=MDM4ZDc5MmU%3D',
        title: 'Магазин «Stockholm»: товары из Европы и Америки',
        img: '/images/sponsors/stockholm.png'
    },
]
sponsors.sort(() => Math.random() - 0.5);
const sponsors1 = sponsors.slice(0, 9)
const sponsors2 = sponsors.slice(9, 18)
const sponsors3 = sponsors.slice(17)

const Partners = () => {

    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 10
        },
        1280: {
            slidesPerView: 8,
            spaceBetween: 10
        }
    }

    const autoplay = {
        delay: 500,
        disableOnInteraction: false,
    }

    const autoplay2 = {
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection:true, waitForTransition:true

    }
    const autoplay3 = {
        delay: 400,
        disableOnInteraction: false,
    }
    const loop = true



    return (
      <section id={'partners'} className={styles.partners}>
        <h2 >
          Партнеры
        </h2>
          <Swiper

              breakpoints={breakpoints}
              autoplay={autoplay}
              observer={true}
              loop={true}
              modules={[Autoplay]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
              {sponsors1.map(item=>( <SwiperSlide key={item.link}><a  href={item.link} className={'bg-white flex justify-center border-[#FF1E00] border-2 figure-border px-8 py-4'}>
                  <img  width="150" height="80" src={'//1415.idc.md'+item.img} alt={item.title}/>
              </a>
              </SwiperSlide>))}
          </Swiper>
          <Swiper

              breakpoints={breakpoints}
              autoplay={autoplay2}
              observer={true}
              loop={true}
              modules={[Autoplay]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
              {sponsors2.map(item=>( <SwiperSlide key={item.link}><a  href={item.link} className={'bg-white flex justify-center border-[#FF1E00] border-2 figure-border px-8 py-4'}>
                  <img src={'//1415.idc.md'+item.img} alt={item.title}/>
              </a>
              </SwiperSlide>))}
          </Swiper>
          <Swiper

              breakpoints={breakpoints}
              autoplay={autoplay3}
              observer={true}
              loop={true}
              modules={[Autoplay]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
              {sponsors3.map(item=>( <SwiperSlide key={item.link}><a  href={item.link} className={'bg-white flex justify-center border-[#FF1E00] border-2 figure-border px-8 py-4'}>
                  <img src={'//1415.idc.md'+item.img} alt={item.title}/>
              </a>
              </SwiperSlide>))}
          </Swiper>
      </section>

    );
};

export default Partners;