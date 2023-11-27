'use client';
import React from 'react';
import Faq, {IFaq} from "@/app/components/ui/faq/faq";
import styles from './faqs.module.scss'
import Snowfall from "react-snowfall";


const FAQS: IFaq[] = [
  {
    question: 'В чём суть игры «Новогодний переполох»? ',
    answer: <p>
      <strong>«Новогодний переполох»</strong> – это интерактивная игра для абонентов IDC, где каждый день разыгрываются
      денежные призы, смартфоны и подарки от партнёров. Чтобы выиграть, нужно всего лишь верно ответить на вопросы игры,
      посвящённые истории и традициям празднования Нового года и Рождества.
    </p>
  },
  {
    question: 'Какие подарки мы разыгрываем?',
    answer: <ul  className={'list-disc'}>
      <li>5 призов по 1000 рублей ПМР ежедневно;</li>
      <li>1 смартфон VIVO Y16 V2204 4/64GB ежедневно;</li>
      <li>подарки от партнеров ежедневно;</li>
      <li>главный приз 50 000 рублей ПМР;</li>
      <li>бонусы от IDC ежедневно – минуты на разговоры внутри сети и мегабайты.</li>
    </ul>
  },
  {
    question: 'Кто может участвовать в игре «Новогодний переполох»?',
    answer: <p>Нужно правильно ответить на три вопроса подряд. Чем больше правильных ответов – тем выше шансы!</p>
  },
  {
    question: 'Что нужно сделать, чтобы участвовать в розыгрыше призов по 1000 рублей?',
    answer: <p>Нужно правильно ответить на три вопроса подряд. Чем больше правильных ответов – тем выше шансы!</p>
  },
  {
    question: 'Что нужно сделать, чтобы участвовать в розыгрыше главного приза - 50 000 рублей?',
    answer: <p>
      Нужно правильно ответить на девять вопросов подряд. Все последующие удачные попытки в течение одной игровой сессии
      увеличат Ваши шансы выиграть главный приз – 50 000 рублей.
    </p>
  },
  {
    question: 'Когда и как можно принять участие в игре «Новогодний переполох»?',
    answer: <>
      <p> Принять участие в игре можно ежедневно в период с 7 декабря 00:00 часов по 26 декабря 23:59.</p>
      <p> Чтобы играть, нужно позвонить на номер 1415 и правильно ответить на вопросы интерактивной игры. Если Вы
        играете на сайте 1415.idc.md или через мобильное приложение «Мой IDC», нажмите кнопку "Выиграть деньги" для
        начала игры.</p>
    </>
  }, {
    question: 'Сколько стоит участие в игре «Новогодний переполох»?',
    answer: <ol className={'list-decimal ml-6'}>
      <li>Стоимость одного сеанса игры (90 секунд) на web-странице 1415.idc.md составляет 7,00 рублей ПМР. Оплата и
        отсчет игрового времени начинается после нажатия кнопки «Играть».
      </li>
      <li>В течение игрового сеанса доступна докупка дополнительного времени (30 секунд). Стоимость дополнительного
        времени составляет 2,00 рубля ПМР. Количество докупок времени не ограничено.
      </li>
      <li>Стоимость «Бонусного вопроса» равна стоимости одного сеанса игры – 7,00 рублей ПМР.</li>
      <li>Стоимость опции «50/50» – 1,00 рубль ПМР. Оплата опции «50/50» осуществляется при нажатии кнопки «50/50».</li>
      <li>При звонках на короткий номер «1415» с мобильной, фиксированной и проводной сети стоимость игры составляет
        7,00 рублей. Тариф применяется за 1 минуту соединения. Продолжительность соединения округляется до полной
        минуты. Тарификация начинается после звукового сигнала.
      </li>
      <li>Для абонентов мобильной и проводной связи (авансовая форма оплаты) минимальная необходимая сумма средств на
        счете для доступа на номер «1415» составляет 16,00 рублей ПМР.
      </li>
      <li>Для абонентов мобильной и проводной связи (кредитная форма оплаты) кредитный лимит для доступа на номер «1415»
        должен составлять не менее 224,00 рублей ПМР.
      </li>
    </ol>
  }, {
    question: 'Как можно выиграть подарок от партнеров?',
    answer: <p>
      Получить подарки от партнёров можно, если Вы играете на сайте 1415.idc.md или в приложении «Мой IDC». Чтобы
      выиграть подарок, нужно правильно ответить на 9 вопросов подряд – система переведёт вас на страницу с подарками,
      которые спрятаны в мешках. Если Вы не выберите ни один из подарочных мешков, подарок аннулируется.
    </p>
  }, {
    question: 'Если выиграл подарок от партнёров, как его получить?',
    answer: <p>
      Если Вы выиграли подарок от партнёров, на следующий день с Вами свяжется менеджер-оператор и разъяснит условия
      получения подарка.
    </p>
  }, {
    question: 'Где и когда проводятся розыгрыши подарков?',
    answer: <>
      <p> Розыгрыши 1000 рублей и смартфона проводятся ежедневно в период проведения интерактивной игры в 18:00 на сайте
        1415.idc.md. Из лицевых счетов абонентов - участников игры, с помощью программы-генератора случайных чисел
        определяются лицевые счета 5 победителей. Список победителей размещается на сайте игры.</p>
      <p> Обратите внимание, если Вы играли 7 декабря, Ваш лицевой счёт будет принимать участие в розыгрыше на следующий
        день, то есть 8 декабря. Розыгрыш призов по 1000 рублей за 26 декабря (последний день игры) состоится 27 декабря
        в 10:00 на сайте 1415.idc.md.</p>
      <p> Розыгрыш главного приза 50 000 рублей состоится 27 декабря в 10.10 на сайте 1415.idc.md с помощью
        программы-генератора случайных чисел. Победитель выбирается за весь период проведения интерактивной игры - с 7
        по 26 декабря.</p>
    </>
  }, {
    question: 'На какую тему вопросы в интерактивной игре?',
    answer: <p>
      Мы подготовили интересные и простые вопросы о традициях и особенностях празднования Нового года и Рождества в
      разных уголках мира, вопросы о культуре и истории новогодних и рождественских праздников, новогодних фильмах и
      мультфильмах, песнях и танцах, любимых блюдах и напитках, а также много других занимательных вопросов по
      новогодней тематике.
    </p>
  }, {
    question: 'Что означает кнопка «Поделиться»?',
    answer: <>
      <p> Отвечайте на вопросы, выигрывайте призы и увеличивайте шансы на победу, а также делитесь и приглашайте
        друзей в нашу интересную новогоднююю игру! Кнопка «Поделиться» доступна только при игре на сайте и через
        приложение «Мой IDC».</p>
      <p> Вы можете поделиться информацией об участии в интерактивной игре в Вашей сторис или публикациях в
        социальных сетях: Instagram, Facebook, ВКонтакте, Одноклассники, Telegram.</p>
      <p> Кнопка «Поделиться» активна 1 раз в сутки.</p>
      <p> Важно! Когда Вы делитесь информацией об участии в игре, Вы увеличиваете свой шанс выиграть главный приз
        - 50 000 рублей. При нажатии кнопки Ваш лицевой счёт вносится в базу розыгрыша главного приза
        дополнительно ещё один раз.</p>
    </>
  }, {
    question: 'Как увеличить шансы на победу в розыгрыше?',
    answer: <>
      <p>Каждый раз, когда Вы верно отвечаете на три вопроса подряд, мы заносим Ваш лицевой счёт в базу участников
        ежедневного розыгрыша по 1000 рублей и базу розыгрыша смартфона. Если Вы верно отвечаете три раза на три
        вопроса подряд (то есть, на 9 вопросов), Ваш лицевой счёт вносится в базу розыгрыша главного приза 50
        000 рублей, и Вы получаете возможность выбрать подарок от наших партнёров. Чем больше правильных
        ответов, тем больше шансов на победу.
      </p><p> Также, если Вы правильно ответили на 9 вопросов подряд, Вам открывается возможность взять бонусный
      вопрос. При верном ответе на бонусный вопрос, мы вносим Ваш лицевой счёт в базу розыгрыша главного приза ещё
      раз, тем самым удваивая Ваши шансы на победу!</p>
    </>
  },
  {
    question: 'Что такое бонусный вопрос? ',
    answer: <p>Ответив верно на 9 вопросов подряд, Вам открывается возможность ответить на бонусный вопрос и
      увеличить свои шансы на выигрыш главного приза 50 000 рублей! При правильном ответе на бонусный вопрос, Ваш
      лицевой счёт ещё раз попадает в базу розыгрыша главного приза, тем самым удваивая вероятность выигрыша!
      Стоимость бонусного вопроса - 7 рублей ПМР. Время на ответ 60 секунд, время не продлевается.</p>
  },
  {
    question: 'Бонусный вопрос отличается по сложности?',
    answer: <p>Нет, это обычный вопрос, который выпадает случайным образом из списка всех вопросов интерактивной
      игры.</p>
  }, {
    question: 'Что означает кнопка «50/50»?',
    answer: <>
      <p>«50/50» (пятьдесят на пятьдесят) – опция, которой Вы можете воспользоваться при ответе на любой из
        вопросов. При выборе опции удаляются 2 неправильных ответа. Вы выбирает правильный ответ из двух
        оставшихся вариантов.</p>
      <p> Стоимость опции «50/50» – 1 рубль ПМР. Кнопка «50/50» размещается постоянно под блоком вопросов рядом с
        кнопкой «Ответить».</p>
    </>
  },
  {
    question: 'Сегодня я ответил (а) на три вопроса интерактивной игры правильно. Когда мой номер будет принимать участие в розыгрыше?',
    answer: <p>На следующий день в 18:00 на сайте <a href="//1415.idc.md">1415.idc.md</a>. Если Вы играли 26 декабря
      (в последний день игры), Ваш номер будет принимать участие в розыгрыше, который состоится 27 декабря в 10.00
      на сайте <a href="//1415.idc.md">1415.idc.md</a>.</p>
  },
  {
    question: 'Если у меня нет возможности посмотреть online розыгрыш на сайте, как я узнаю, выиграл (а) ли я?',
    answer: <p>Если Ваш лицевой счёт оказался выигрышным, то на следующий день с Вами свяжется менеджер-оператор и
      разъяснит условия получения выигрыша.</p>
  },


]


const Faqs = () => {
  return (
    <div id='faq' className={styles.faqs}>
      <Snowfall color={'#ffffff50'} snowflakeCount={500} radius={[0.5, 5.0]} wind={[-1, 3.0]}/>
      <h2 className={'text-center'}>
        Вопросы и ответы
      </h2>
      <div className="container flex flex-col gap-4 mx-auto">
        {FAQS.map(faq => <Faq key={faq.question} question={faq.question} answer={faq.answer}/>)}
      </div>
    </div>
  )
};

export default Faqs;