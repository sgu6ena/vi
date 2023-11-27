import {IBonusPrize} from "@/app/api/types";

export interface IBonusTree {
  isLoading: boolean;
  isError: boolean;
  prizes: IBonusPrize[]
}

export const initialState: IBonusTree = {
  prizes: [],
  isError: false,
  isLoading: false
}