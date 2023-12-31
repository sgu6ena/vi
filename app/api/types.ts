

export interface IAnswer {
  game_id: number,
  answer: number,
  quest_id: number
}

export interface IResult {
  end_game: boolean;
  elka: boolean;
  bonus: boolean;
  type?: 3 | 1
  round?: 1 | 2 | 3
}

export interface IType{
  type: 1 | 3
}

export interface IBonus{
  game_id:string
  click_id:string
}

export interface IBonusPrize{
title:string
}

export type IQuestion = {
  id: number
  title: string
  body: string,
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  time: number
  type: any | null
  help:number[]

}


export interface IMainBonus{

}


export interface ISponsor{
  id:number
  link:string
  title:string
  src:string
  instagram?:string
}