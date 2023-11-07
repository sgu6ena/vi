import React from 'react';

const Page = () => {
    return (
        <div>
            {/*<Loading/>*/}
            <div className="air-block w-96 p-8 text-sm bg-white flex-center-between flex-col gap-6 ">
                <p>Введите 8-мизначный номер телефона IDC, с которого будут списываться денежные средства за участие в
                    Викторине.После ввода на указанный Вами номер телефона будет отправлено SMS–сообщение с одноразовым
                    паролем.</p>
                <label > Номер телефона
                <input className={'w-full rounded-xl border p-2'} type="text" placeholder={'77X XXXXX'}/>
                </label>
                <button className={'btn '}>Получить код по SMS</button>
                <p><sup> Тариф за один сеанс игры (90 секунд) составляет 7,00 руб.</sup></p>
            </div>
        </div>
    );
};

export default Page;