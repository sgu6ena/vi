import {ISponsor} from "@/app/api/types";

export interface IMainState {
  isLoading: boolean;
  isError: boolean;

  sponsors:ISponsor[]

  drawing:{
    time:number
    title:string
    body:string
    type:number
  }

}

export const initialState: IMainState = {

  isError: false,
  isLoading: false,
  sponsors:[],
  drawing:{
    time:0,
    title:'',
    body:'',
    type:0
  }
}