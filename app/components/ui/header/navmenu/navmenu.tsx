'use client';
import React from 'react';
import styles from "@/app/components/ui/header/header.module.scss";
import {useBoolean, useScreen} from "usehooks-ts";
import Tel from "@/app/components/ui/header/tel/tel";
import classNames from "classnames";

const menuData: { link: string, title: string }[] = [{
    link: "/#main", title: 'Главная'
}, {
    link: "/#partners", title: 'Партнеры'
},
    {
        link: "/#winners", title: 'Победители'
    },
    {
        link: "/#faqs", title: 'Вопросы и ответы'
    },
]
const Navmenu = () => {
    const {value, toggle} = useBoolean()
    return (
        <>
            <nav className={''}>
                <ul>
                    {menuData.map((item, index) => (
                        <li key={item.title + index}><a href={item.link}>{item.title}</a></li>
                    ))}
                </ul>
                <Tel/>
            </nav>
            <div className={'visible block lg:hidden lg:invisible'} onClick={toggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_134_3015" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_134_3015)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 18V16H3V18H12ZM21 13V11H3V13H21ZM12 8H21V6H12V8Z" fill="white"/>
                    </g>
                </svg>

            </div>
            <ul className={classNames("flex fixed z-50  p-4 text-3xl text-white top-0 right-0 bottom-0 left-0 bg-black flex-col", value ? 'visible' : 'invisible')}>
                <div onClick={toggle} className={'absolute right-10 top-0 text-3xl'}>×</div>

                {menuData.map((item, index) => (
                    <li key={item.link+index} className={'w-100  border-b-2 py-6'} onClick={toggle}><a href={item.link}>{item.title}</a></li>
                ))}
                <Tel/>

            </ul>
        </>

    );
};

export default Navmenu;