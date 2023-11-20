'use client';

import React from 'react';
import styles from './modal.module.scss'
import {useActions, useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {userSlice} from "@/app/store/reducers/user/userSlice";
import {allActions} from "@/app/store/rootActions";

const Register = () => {
    const isSmsSend = useAppSelector(state => state.userReducer.isSendSms)
    const {sendSms}=useActions()
    const sendSMS = () => {

        sendSms()
    }
    return (
        <form className={styles.modal}>
      <div className={'text-center text-sm'}> Внимание! Участие в викторине - платное. Чтобы участвовать, введи свой номер телефона, на который мы
        отправим SMS-сообщение с одноразовым кодом. После подтверждения, денежные средства за игру будут списываться с
        лицевого счёта Вашего номера. Минимальная сумма для доступа к игре - 16 рублей.
      </div>
      <label> Номер телефона
          <input className={'w-full rounded-xl bg-transparent border p-2'} type="text" placeholder={'77X XXXXX'}/>
      </label>
            {isSmsSend ?
                <label> Код из SMS
                    <input className={'w-full bg-transparent rounded-xl border p-2'} type="text" placeholder={'XXXX'}/>
                </label> : null
            }

            <div className={'w-full'}>
                {isSmsSend ? <button>jdhsjd</button> : <div onClick={sendSMS} className={styles.btnGold}>Получить код по SMS</div>}
                <div className={'text-sm text-center mt-2 text-gray-500'}><sup> Тариф за один сеанс игры (90 секунд)
                    составляет 7,00 руб.</sup></div>
            </div>
        </form>
  );
};

export default Register;