import React, {FC} from 'react';
import {useActions} from "@/app/store/hooks";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";
import StartGame from "@/app/(pages)/game/startGame";

const Win: FC<{ bonus: boolean }> = ({bonus}) => {
    return (
        <div className={'flex p-2 text-white h-full pb-40 m-auto flex-col gap-4 justify-center items-center '}>
            <div className={'bg-green text-center  figure-border px-10 py-4'}>
                <p>Поздравляем, ваш ответ верный! Ваш лицевой счет будет принимать участие в ежедневном розыгрыше смартфона и 5-ти призов по 1000 рублей, который состоится завтра в 18:00 на сайте 1415.idc.md.  </p>
                <p>Примите участие в розыгрыше супер-приза – 50 000 рублей и увеличьте шансы на победу в ежедневном розыгрыше, а также получите шанс выиграть приз от наших партнеров, нажав кнопку «Играть еще</p>
            </div>
            <StartGame text={'Играть еще'} bonus={false}/>
            {bonus?  <StartGame text={'Бонусный вопрос'} bonus={true}/>:null}
            <div className={'bg-red w-full text-center figure-border p-4'}>Завершить игру</div>
        </div>
    );
};

export default Win