export interface IBonusTree {
  isLoading: boolean;
  isError: boolean;
  prizes: {title:string}[]
}

export const initialState: IBonusTree = {
  prizes: [],

  isError: false,
  isLoading: false
}