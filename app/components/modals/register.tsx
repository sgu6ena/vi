'use client';

import React, {useEffect} from 'react';
import styles from './modal.module.scss'
import {useActions, } from "@/app/store/hooks";
import {SubmitHandler, useForm} from 'react-hook-form'
import {TEXT_MODALS} from "@/app/config/texts";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";
import {useUser} from "@/app/hooks/user";
import Loading from "@/app/loading";
import {iSendCode, iSendSms} from "@/app/store/user/interface";


const Register = () => {


    const {phoneNumber, isSmsSend, isLoading, isTrueCode, isError, error} = useUser()
    const {push} = useRouter()
    const {postPhone, postCode, resetRegister, } = useActions()

    const sendPhone: SubmitHandler<iSendSms> = (data) => {
        postPhone(data)
    }

    const sendCode: SubmitHandler<iSendCode> = (data) => {
        postCode({phone:phoneNumber, sms:data.sms})
    }

    useEffect(()=>{
        if(isTrueCode)
            push(LINKS.START)
    },[isTrueCode])


    const PhoneForm = () => {
        const {formState: {errors}, handleSubmit, register} = useForm<iSendSms>()

        return (<form className={styles.modal} onSubmit={handleSubmit(sendPhone)}>
            <div className={'text-center text-sm'}> {TEXT_MODALS.TEXT_WARNING_PHONE} </div>
            <label> Номер телефона
                <input
                    {...register('phone', {
                        required: TEXT_MODALS.ERROR_FOR_MOBILE,
                        pattern: {
                            value: /^77\d{6}$/,
                            message: TEXT_MODALS.ERROR_FOR_MOBILE,
                        },
                    })}
                    placeholder={'77X XXXXX'}
                />
                <span>{errors.phone && <>{errors.phone.message}</>}</span>
            </label>
            <div className={'w-full'}>
                <button type={'submit'} className={styles.btnGold}>Получить код по SMS</button>
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
            </div>
        </form>)
    }


    const SmsForm = () => {
        const {handleSubmit, register} = useForm<iSendCode>()

        return (<form className={styles.modal} onSubmit={handleSubmit(sendCode)}>
            <div className={'text-center text-sm'}> {TEXT_MODALS.TEXT_WARNING_CODE} </div>

            <label>Номер телефона
                <input {...register("phone")} defaultValue={phoneNumber} value={phoneNumber} disabled
                       placeholder={'77X XXXXX'}/>
            </label>
            <label> Код из SMS
                <input
                    {...register('sms', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: /^\d{4}$/,
                            message: TEXT_MODALS.ERROR_FOR_CODE,
                        },
                    })}
                    type="text"
                    placeholder={'XXXX'}
                />{isError && <div className={'text-[#ff0000] mt-1 text-center text-sm'}>{error}</div>}
            </label>

            <div className={'w-full'}>
                <button type={'submit'} className={styles.btnGold}>Играть</button>
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
                <div className={'text-white underline  text-center cursor-pointer'} onClick={()=>resetRegister()}>Отправить пароль в SMS еще раз</div>
            </div>
        </form>)
    }


    return isLoading ? <Loading/> : isSmsSend ? isTrueCode ? <Loading/> : <SmsForm/> : <PhoneForm/>;
};

export default Register;