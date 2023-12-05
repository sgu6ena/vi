'use client';
import React, {useState} from 'react';
import styles from './buttons.module.scss'

import Share from "@/app/(pages)/game/share/share";
import Modal from "@/app/components/modals/modal";
import Script from "next/script";


const TITLE = "Новогодний переполох от IDC"
const URL = 'https://1415-dev.idc.md'
const ShareButton = () => {

    const [isShow, setIsShow] = useState(false)
    const clickHandler = () => {
        setIsShow(!isShow)
    }
    return (
        <>
            {isShow ? <div >
                    <Share/>
                    <Script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"   async={true}/>
                </div> :
                <div className={styles.shareButton} onClick={clickHandler}>
                    Поделиться
                </div>}
        </>

    );
};

export default ShareButton;