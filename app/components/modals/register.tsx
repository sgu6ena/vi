'use client';

import React from 'react';
import styles from './modal.module.scss'
import {useActions, useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import {TEXT_MODALS} from "@/app/config/texts";

interface iSendSms  {
    phone: string
}
interface iSendCode {
    phone: string
    code: string
}



const Register = () => {
    const isSmsSend = useAppSelector(state => state.userReducer.isSendSms)
    const PhoneNumber = useAppSelector(state => state.userReducer.phone)


    const {sendSms, setNumber} = useActions()

    const {formState, handleSubmit, register} = useForm<iSendSms|iSendCode>()

    const sendSMS: SubmitHandler<iSendSms> = (data) => {

        //TODO отправлять запрос на код - если номер валидный
        sendSms()
        setNumber(data.phone)

    }
    const sendCode: SubmitHandler<iSendCode> = (data) => {
        console.log(data)
        //TODO отправлять код, если код верный - перенаправлять на страницу с игрой

    }

    return (
        // @ts-ignore
        <form className={styles.modal} onSubmit={handleSubmit(isSmsSend ? sendCode : sendSMS)}>
      <div className={'text-center text-sm'}> {TEXT_MODALS.TEXT_WARNING}</div>
            {isSmsSend ?
                <>
                    <label> Номер телефона
                        <input {...register("phone")} defaultValue={PhoneNumber?.toString()} disabled
                               placeholder={'77X XXXXX'}/>
                    </label>
                <label> Код из SMS
                    <input {...register("code")} type="text" placeholder={'XXXX'}/>
                </label>
                </>
                :
                <label> Номер телефона
                    <input {...register("phone")}
                           placeholder={'77X XXXXX'}/>
                </label>
            }

            <div className={'w-full'}>
                {isSmsSend ? <button type={'submit'} className={styles.btnGold}>Играть </button> :
                    <button type={'submit'} className={styles.btnGold}>Получить код по SMS</button>}
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
            </div>
        </form>
  );
};

export default Register;