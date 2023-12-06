export const AUTH = {
  BY_MOBILE: '/mobile',
  SMS_CODE: '/sms'
}

export const GAME = {
  NEED_AUTH: '/needAuth', /* проверка авторизации */
  START_BY_TYPE: '/question',
  STATUS: '/question',
  QUESTION: '/quest', /* запросить вопрос */
  ANSWER: '/answer', /* отправить ответ */
  TIME: '/buyTime', /* докупить 30 секунд */
  HELP: '/buyHelp', /* 50*50 */
  BONUS_PRIZE: "/tree" ,/* призы на елочке */
  REPOST:'/repost' /* регистрация репостов */
}

export const MAIN = {
  DRAWING: '/drawing', /* Статус розыгрыша викторины */
  WINNERS: '/winner', /* Список победителей */
  SPONSORS: '/sponsorList', /* Список спонсоров, для главной */
  BONUS: '/bonus',/* На главной, Бонусы / Призы */
  WINNER_ACC: '/winnerAcc' /* Список ежедневных победителей с фотками, в 2023NY отсутствует в дизайне */
}