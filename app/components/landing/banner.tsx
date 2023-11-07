import React from 'react';
import styles from './banner.module.scss'

const Banner = () => {
  return (
    <section id={'main'} className={styles.banner}>

      <div className={styles.main}>
        <div className={styles.left}>

          <h1>Новогодний<br/> переполох</h1>
          <a href={'/game'} className={styles.start}>
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
          <div className={styles.prize}>Главный приз 50 000 рублей</div>
          <p>Ежедневный розыгрыш</p>
          <div className={styles.prizes}>
            <div>
              <b>5 000</b>
              <span>рублей</span>
            </div>
            <div>
              <b>20 смартфонов</b>
              <span>Vivo 15 PRO MAX</span>
            </div>
            <div>
              <b>подарки <br/> от парнеров</b>
            </div>
          </div>

        </div>
        <div className={styles.right}>
          <img src="/images/1.png" alt="" className={styles.img1}/>
          <img src="/images/2.png" alt=""  className={styles.img2}/>
          <img src="/images/3.png" alt=""  className={styles.img3}/>
        </div>
      </div>



    </section>
  );
};

export default Banner;