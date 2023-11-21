'use client';
import React from 'react';
import Snowfall from "react-snowfall";
import Question from "@/app/components/ui/question/question";
import styles from "./layout.module.scss";

const Layout = ({
                    children,
                }: {
    children: React.ReactNode
}) =>{
    return (
        <div className={' w-full pt-20 min-h-screen'}>
            <Snowfall color={'#ffffff50'} snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/>
            <div className="grid  min-h-screen overflow-hidden md:grid-cols-7 gap-4">
                <div className="col hidden relative   col-span-2 md:block">
                    <img src={'/images/img_6.png'} alt="" className={styles.img3}/>
                    <img src={'/images/img_4.png'} alt="" className={styles.img1}/>
                    {/*<img src={'/images/img_5.png'} alt="" className={styles.img2}/>*/}

                </div>
                <div className="col col-span-3 ">  {children}</div>
                <div className="col hidden relative  col-span-2 md:block">
                    <img src={'/images/elka.png'} alt="" className={styles.img5}/>
                    {/*<img src={'/images/img_7.png'} alt="" className={styles.img4}/>*/}
                </div>
            </div>


        </div>
    );
};

export default Layout;