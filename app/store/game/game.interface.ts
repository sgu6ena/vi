export type IAnswer={
    text: string

}

export type IQuestion={
    title:string
    question: string,answers: IAnswer[]

}


export interface GameState{
    currentGame:{
        indexQuestion:number
    }
    allGames:{
        count:number
    }
}

export const initialState:GameState = {
    currentGame:{
        indexQuestion: 0
    },
    allGames:{
        count: 0
    }

}
