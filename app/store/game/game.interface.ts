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
    quest_id:number
    game_id:number
    answer_id:number
    question:IQuestion

}

// export interface GameState{
//     currentGame:{
//         indexQuestion:number
//     }
//     allGames:{
//         count:number
//     }
// }
//
// export const initialState:GameState = {
//     currentGame:{
//         indexQuestion: 0
//     },
//     allGames:{
//         count: 0
//     }
//
// }
