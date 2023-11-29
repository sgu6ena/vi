import {IQuestion} from "@/app/api/types";

export interface GameState {
  isLoading: boolean
  isError: boolean
  isWin: boolean
  end_game: boolean
  elka: boolean
  bonus: boolean
  isHelp: boolean
  isNeedAuth:boolean
  quest_id: number | null
  game_id: number | null
  answer_id: number
  message: string
  timer: number | null
  question: IQuestion | null
}

export const initialState: GameState = {
  end_game: false,
  elka: false,
  bonus: false,
  isHelp: false,
  isNeedAuth:false,
  isLoading: false,
  isError: false,
  message: '',
  isWin: false,
  timer: null,
  quest_id: null,
  game_id: null,
  answer_id: 0,
  question: null
}
