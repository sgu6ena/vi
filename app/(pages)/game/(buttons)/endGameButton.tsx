'use client';
import React, {useState} from 'react';
import styles from './buttons.module.scss'
import Modal from "@/app/components/modals/modal";
import {useActions} from "@/app/store/hooks";
import {useRouter} from "next/navigation";
const EndGameButton = () => {

    const {resetRegister} = useActions()
    const {push} = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const modalToggle = () => setIsOpen(!isOpen)

    const sayYes = () => {
        modalToggle();
        resetRegister()
        push('/')
    }


    return (
        <>
            <div className={styles.endGameButton} onClick={modalToggle}>
                Завершить игру
            </div>
            <Modal modalIsOpen={isOpen} setIsOpen={setIsOpen}>
                <div className={'grid grid-cols-2 gap-y-6 gap-x-2'}>
                    <div className={'px-10 py-10 figure-border bg-green text-white text-xl text-center col-span-2'}>
                        Вы действительно хотите выйти?
                    </div>
                    <div className={'px-10 py-4 figure-border bg-gold  text-red text-xl text-center cursor-pointer'}
                         onClick={sayYes}>
                        Да
                    </div>
                    <div className={'px-10 py-4 figure-border bg-red text-white text-xl text-center  cursor-pointer'}
                         onClick={modalToggle}>
                        Нет
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EndGameButton;