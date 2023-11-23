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
    isWin: boolean
    isLose: boolean

    end_game: boolean
    elka: boolean
    bonus: boolean

    quest_id:number
    game_id:number |null
    answer_id:number

    message: string

    timer: number | null
    question: IQuestion | null
}

export const initialState: GameState = {
    end_game: false,
    elka: false,
    bonus: false,
    isLoading:false,
    isError:false,
    message: '',
    isWin: false,
    isLose: false,
    timer:null,
    quest_id: 0,
    game_id: null,
    answer_id: 0,
    question: null
}
