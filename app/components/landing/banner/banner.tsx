'use client';
import React, {useEffect, useState} from 'react';
import styles from './banner.module.scss'
import Modal from "@/app/components/modals/modal";
import Register from "@/app/components/modals/register";
import dynamic from "next/dynamic";
import {useMain} from "@/app/hooks/useMain";
import {useActions} from "@/app/store/hooks";


const DynamicTimer = dynamic(() => import('../../widjets/timer').then(m => m.Timer), {
  ssr: false,
})
const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const {time, title, type} = useMain()
  const isLoad = Boolean(title)


  const {getStatus, getWinner, getSponsors} = useActions()


  useEffect(() => {
    const timer = setTimeout(() => {
      getStatus();
    }, 30000)
    return () => clearTimeout(timer)
  }, [time])

  useEffect(() => {
    getStatus();
  }, []);

  const {accounts} = useMain()



  return (
    <section id={'main'} className={styles.banner}>
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}><Register/></Modal>
      <div className={styles.main}>
        <div className={styles.left}>

          {isLoad && <DynamicTimer type={type.toString()} time={time * 1000}/>}


          <h1>Новогодний<br/> переполох</h1>
          <a onClick={() => setIsOpen(true)} className={styles.start}>
            <span>
              Выиграть деньги
            </span>
            <div>
              <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4492 10.4595L33.313 20.3232L23.4492 30.187" stroke="currentColor" strokeWidth="3"
                      strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.6875 20.3232H33.0362" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
          {/*{type === 0 ? <div className={styles.start}>Викторина завершена</div>*/}
          {/*    : <a onClick={() => setIsOpen(true)} className={styles.start}>*/}
          {/*  <span>*/}
          {/*    Выиграть деньги*/}
          {/*  </span>*/}
          {/*      <div>*/}
          {/*        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*          <path d="M23.4492 10.4595L33.313 20.3232L23.4492 30.187" stroke="currentColor" strokeWidth="3"*/}
          {/*                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>*/}
          {/*          <path d="M5.6875 20.3232H33.0362" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10"*/}
          {/*                strokeLinecap="round" strokeLinejoin="round"/>*/}
          {/*        </svg>*/}
          {/*      </div>*/}
          {/*    </a>}*/}
          <div className={styles.prize}>Главный приз 50&nbsp;000 рублей</div>
          <p>Ежедневный розыгрыш</p>
          <div className={styles.prizes}>
            <div>
              <b>5&nbsp;000</b>
              <span>рублей</span>
            </div>
            <div>
              <b>Смартфон</b>
              <span>VIVO Y16</span>
            </div>
            <div>
              <b>Подарки <br/> от партнёров</b>
            </div>
          </div>

        </div>
        <div className={styles.right}>
          <img src="/images/img_1.png" alt="" className={styles.img}/>
        </div>
      </div>


    </section>
  );
};

export default Banner;