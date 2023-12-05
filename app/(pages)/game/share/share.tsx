'use client';
import React from 'react';
import Script from "next/script";
import {FaFacebookF, FaVk} from "react-icons/fa";
import {FaTelegramPlane, FaViber} from "react-icons/fa";
import {BiLogoOkRu} from "react-icons/bi";
import styles from './share.module.scss'
import classNames from "classnames";
import {useActions} from "@/app/store/hooks";


const TITLE = "Новогодний переполох от IDC"
const URL = 'https://1415.idc.md'

const Share = () => {
    const {shared}= useActions()
    return (
        <div className={'flex justify-center gap-2 items-center'}>

            <button className={classNames(styles.button, styles.ok)}
                    data-sharer="okru"
                    onClick={shared}
                    data-url={URL}
                    data-title={TITLE}>
                <BiLogoOkRu/>
            </button>
            <button className={classNames(styles.button,styles.vk)}
                    data-sharer="vk"
                    onClick={shared}
                    data-caption={TITLE}
                    data-title={TITLE}
                    data-url={URL}>
                <FaVk/>
            </button>
            <button className={classNames(styles.button,styles.viber)}
                    onClick={shared}
                    data-sharer="viber"

                    data-title={TITLE}
                    data-url={URL}>
                <FaViber/>

            </button>
            <button className={classNames(styles.button,styles.facebook)}
                    data-sharer="facebook"
                    onClick={shared}
                    data-hashtag={"IDC-викторина"}
                    data-url={URL}>
                <FaFacebookF/>
            </button>
            <button className={classNames(styles.button,styles.telegram)}
                    data-sharer="telegram"
                    onClick={shared}
                    data-title={TITLE}
                    data-url={URL}>
                <FaTelegramPlane/>

            </button>


        </div>
    );
};

export default Share;