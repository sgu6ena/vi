import {useAppSelector} from "@/app/store/hooks";

export const useMain = () => {
  const isLoading = useAppSelector(state => state.mainReducer.isLoading);
  return {isLoading}
}