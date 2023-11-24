'use client';
import React, {useEffect} from 'react';
import Snowfall from "react-snowfall";
import styles from "./layout.module.scss";
import {useGame} from "@/app/hooks/useGame";
import StartGame from "@/app/(pages)/game/(buttons)/startGame";
import EndGameButton from "@/app/(pages)/game/(buttons)/endGameButton";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";

const Layout = ({
                    children,
                }: {
    children: React.ReactNode
}) =>{

    const {isError, message} = useGame()
    const {push}= useRouter()
    useEffect(() => {
        if(isError){
            push(LINKS.START)
        }
    }, [isError]);
    return (
        <div className={' w-full pt-20 min-h-screen'}>
            <Snowfall color={'#ffffff50'} snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/>
            <div className="grid  min-h-screen overflow-hidden md:grid-cols-7 gap-4">
                <div className="col hidden relative   col-span-2 md:block">
                    <img src={'/images/img_6.png'} alt="" className={styles.img3}/>
                    <img src={'/images/img_4.png'} alt="" className={styles.img1}/>

                </div>
                <div className="col  col-span-3 ">  {isError ?
                    <div className={'flex flex-col gap-10 justify-center items-center min-h-[80vh]'}>
                        <p className={'bg-red  relative w-full p-6 text-white text-center figure-border'}>{message}</p>
                        <StartGame text={'Играть'} bonus={false}/>
                        <EndGameButton/>
                    </div> : children}</div>
                <div className="col hidden relative  col-span-2 md:block">
                    <img src={'/images/elka.png'} alt="" className={styles.img5}/>
                </div>
            </div>
        </div>
    );
};

export default Layout;