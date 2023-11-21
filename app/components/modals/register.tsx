'use client';

import React from 'react';
import styles from './modal.module.scss'
import {useActions, useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import {TEXT_MODALS} from "@/app/config/texts";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";
import {registerAPI} from "@/app/store/services/registerAPI";

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
    const {push} = useRouter()
    const {sendSms, setNumber} = useActions()

    const [postMobile, {data}] = registerAPI.usePostMobileMutation();


    const sendSMS: SubmitHandler<iSendSms> = (data) => {

        postMobile({phone: Number(data.phone)})

        sendSms()
        setNumber(data.phone)


    }
    const sendCode: SubmitHandler<iSendCode> = (data) => {
        console.log(data)
        //TODO отправлять код, если код верный - перенаправлять на страницу с игрой
        push(LINKS.GAME)
    }


    const PhoneForm = () => {
        const {formState: {errors}, handleSubmit, register} = useForm<iSendSms>()

        return (<form className={styles.modal} onSubmit={handleSubmit(sendSMS)}>
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


    const CodeForm = () => {
        const {handleSubmit, register} = useForm<iSendCode>()

        return (<form className={styles.modal} onSubmit={handleSubmit(sendCode)}>
            <div className={'text-center text-sm'}> {TEXT_MODALS.TEXT_WARNING_CODE} </div>

            <label>Номер телефона
                <input {...register("phone")} defaultValue={PhoneNumber?.toString()} disabled
                       placeholder={'77X XXXXX'}/>
            </label>
            <label> Код из SMS
                <input
                    {...register('code', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: /^\d{4}$/, // Регулярное выражение для 4-значного кода
                            message: TEXT_MODALS.ERROR_FOR_CODE,
                        },
                    })}
                    type="text"
                    placeholder={'XXXX'}
                />
            </label>
            <div className={'w-full'}>
                <button type={'submit'} className={styles.btnGold}>Играть</button>
                <sup> {TEXT_MODALS.TEXT_PRICE}</sup>
            </div>
        </form>)
    }


    return isSmsSend ? <CodeForm/> : <PhoneForm/>;
};

export default Register;