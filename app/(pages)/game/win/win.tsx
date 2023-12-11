'use client';
import React, {FC} from 'react';
import StartGame from "@/app/(pages)/game/(buttons)/startGame";
import EndGameButton from "@/app/(pages)/game/(buttons)/endGameButton";

const Win: FC<{ bonus: boolean, type: 1 | 3 | null, round: 1 | 2 | 3 | null }> = ({bonus, type, round}) => {

    const isBonusWin = type?.toString() === '1'

    return (
    <div className={'flex  text-white h-full pb-40 m-auto flex-col gap-4 justify-center items-center '}>
      <div className={'bg-green text-center  figure-border md:px-10 px-6 text-sm md:text-lg py-4'}>
          {isBonusWin ? <>
                <p>Поздравляем, Ваш ответ верный! Ваш лицевой счет будет принимать участие в ежедневном розыгрыше смартфона и
                    5-ти призов по 1000 рублей, который состоится завтра в 18:00 на сайте
                    1415.idc.md , а также в розыгрыше супер-приза в размере 50
                    000 рублей, который состоится 27 декабря 2023 года.</p>
              </> :
              <>
                  <p>Поздравляем, ваш ответ верный! Ваш лицевой счёт будет принимать участие в ежедневном розыгрыше
                      смартфона и
                      5-ти призов по 1000 рублей, который состоится завтра в 18:00 на сайте 1415.idc.md. </p>
                  <p>Примите участие в розыгрыше супер-приза – 50 000 рублей и увеличьте шансы на победу в ежедневном
                      розыгрыше, а
                      также получите шанс выиграть приз от наших партнёров, нажав кнопку «Играть ещё».</p>
              </>}
      </div>
      <StartGame text={'Играть ещё'} bonus={false}/>
      {bonus ? <StartGame text={'Бонусный вопрос'} bonus={true}/> : null}
      <EndGameButton/>
    </div>
  );
};

export default Win