import React, {useState} from 'react';
import styles from './banner.module.scss'
import {Timer} from "@/app/components/widjets/timer";
import Modal from "@/app/components/modals/modal";
import Register from "@/app/components/modals/register";

const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section id={'main'} className={styles.banner}>
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}><Register/></Modal>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={'text-white lg:text-3xl text-lg sm:block hidden'}>
            <div className={'pb-4 '}>До ежедневного розыгрыша осталось</div>
            <Timer deadline={'12/04/2023'}/></div>
          <h1>Новогодний<br/> переполох</h1>
          <a onClick={()=>setIsOpen(true)} className={styles.start}>
            <div>
              Выиграть деньги
            </div>
            <div>
              <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4492 10.4595L33.313 20.3232L23.4492 30.187" stroke="currentColor" strokeWidth="3"
                      strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.6875 20.3232H33.0362" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
          <div className={styles.prize}>Главный приз 50&nbsp;000 рублей</div>
          <p>Ежедневный розыгрыш</p>
          <div className={styles.prizes}>
            <div>
              <b>5&nbsp;000</b>
              <span>рублей</span>
            </div>
            <div>
              <b>Смартфон</b>
              <span>Vivo Y16</span>
            </div>
            <div>
              <b>Подарки <br/> от парнеров</b>
            </div>
          </div>

        </div>
        <div className={styles.right}>
          <img src="/images/img_1.png" alt="" className={styles.img}/>
          {/*<img src="/images/2.png" alt=""  className={styles.img2}/>*/}
          {/*<img src="/images/3.png" alt=""  className={styles.img3}/>*/}
        </div>
      </div>



    </section>
  );
};

export default Banner;