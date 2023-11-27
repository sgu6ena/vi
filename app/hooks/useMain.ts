import {useAppSelector} from "@/app/store/hooks";

export const useMain = () => {
  const isLoading = useAppSelector(state => state.mainReducer.isLoading);
  const {time, title, type, body}  =useAppSelector(state => state.mainReducer.drawing)
  const accounts  =useAppSelector(state => state.mainReducer.accounts)
  return {isLoading, time, title, type, body, accounts}
}