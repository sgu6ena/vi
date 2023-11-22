export type IAnswer={
    text: string

}

export type IQuestion={
    id:number
    title:string
    body: string,
    answer1:string
    answer2:string
    answer3:string
    answer4:string
    time:number
    type:any |null

}
export interface GameState{

    isLoading:boolean
    isError:boolean
    quest_id:number
    game_id:number
    answer_id:number
    question: IQuestion | null

}

export const initialState: GameState = {
    isLoading:false,
    isError:false,
    quest_id: 0,
    game_id: 0,
    answer_id: 0,
    question: null
}
