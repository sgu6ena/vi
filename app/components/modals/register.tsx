import React from 'react';
import styles from './modal.module.scss'
const Register = () => {
  return (
    <div className={styles.modal}>
      <div className={'text-center text-sm'}> Внимание! Участие в викторине - платное. Чтобы участвовать, введи свой номер телефона, на который мы
        отправим SMS-сообщение с одноразовым кодом. После подтверждения, денежные средства за игру будут списываться с
        лицевого счёта Вашего номера. Минимальная сумма для доступа к игре - 16 рублей.
      </div>
      <label> Номер телефона
        <input className={'w-full rounded-xl border p-2'} type="text" placeholder={'77X XXXXX'}/>
      </label>
      <button className={styles.btnGold}>Получить код по SMS</button>
      <div><sup> Тариф за один сеанс игры (90 секунд) составляет 7,00 руб.</sup></div>
    </div>
  );
};

export default Register;