export const AUTH = {
  BY_MOBILE: '/mobile',
  SMS_CODE: '/sms'
}

export const GAME = {
  NEED_AUTH: '/needAuth',
  START_BY_TYPE: '/question',
  STATUS: '/question',
  QUESTION: '/quest',
  ANSWER: '/answer',
  TIME: '/buyTime',
  BONUS_PRIZE: "/tree"
}

export const MAIN = {
  DRAWING: '/drawing', /* Статус розыгрыша викторины */
  WINNERS: '/winner', /* Список победителей */
  SPONSORS: '/sponsorList', /* Список спонсоров, для главной */
  BONUS: '/bonus',/* На главной, Бонусы / Призы */
  WINNER_ACC: '/winnerAcc' /* Список ежедневных победителей с фотками, в 2023NY отсутствует в дизайне */
}