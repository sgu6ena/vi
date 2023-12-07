'use client';

import React, {ChangeEvent, useEffect} from 'react';
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
    const {postPhone, postCode, resetRegister,} = useActions()

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
        const {formState: {errors}, handleSubmit, register, setValue} = useForm<iSendSms>()
        const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
            let inputValue = e.target.value;
            if (inputValue.length ===1 && inputValue.charAt(0) !== '7') {
                inputValue = inputValue.slice(1);
            }
            if (inputValue.length === 2 && inputValue.charAt(1) !== '7') {
                inputValue = inputValue.slice(0, 1);
            }

            if (inputValue.length > 8) {
                inputValue = inputValue.slice(0,8);
            }
            setValue('phone', inputValue);
        };
        return (<form className={styles.modal} onSubmit={handleSubmit(sendPhone)}>
            <div className={'text-center text-sm'}> {TEXT_MODALS.TEXT_WARNING_PHONE} </div>
            <label> Номер телефона
                <input
                    {...register('phone', {
                        required: TEXT_MODALS.ERROR_FOR_MOBILE,
                        max: 77999999, min: 77000000, maxLength: 8,
                        pattern: {
                            value: /^77[4-9]\d{5}$/,
                            message: TEXT_MODALS.ERROR_FOR_MOBILE,
                        },

                    })}
                    onChange={handlePhoneChange}
                    type={'number'}
                    placeholder={'77X XXXXX'}
                />
                <span>{errors.phone && <>{errors.phone.message}</>}</span>
                <span className={'text-center text-sm leading-4 pt-1 text-[#FF2626] leading-5'}>{isError && error}</span>
            </label>
            <div className={'w-full'}>
                <button type={'submit'} className={styles.btnGold}>Получить код по SMS</button>
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
            </div>
        </form>)
    }


    const SmsForm = () => {
        const {handleSubmit, register, setValue} = useForm<iSendCode>()
        const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
            let inputValue = e.target.value;
            if (inputValue.length > 4) {
                inputValue = inputValue.slice(0,4);
            }
            setValue('sms', inputValue);
        };
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
                    type="number"
                    placeholder={'XXXX'}
                    onChange={handleCodeChange}
                />{isError && <div className={'text-[#ff0000] mt-1 text-center text-sm'}>{error}</div>}
            </label>

            <div className={'w-full'}>
                <button type={'submit'} className={styles.btnGold}>Играть</button>
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
                <div className={'text-white underline  text-center cursor-pointer'} onClick={()=>resetRegister()}>Отправить пароль в SMS ещё раз</div>
            </div>
        </form>)
    }


    return isLoading ? <Loading/> : isSmsSend ? isTrueCode ? <Loading/> : <SmsForm/> : <PhoneForm/>;
};

export default Register;