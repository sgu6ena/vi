import {useAppSelector} from "@/app/store/hooks";

export const useBonusTree = () => {
  const prizes = useAppSelector(state => state.bonusTree.prizes);
  const isLoading = useAppSelector(state => state.bonusTree.isLoading);
  const isError = useAppSelector(state => state.bonusTree.isError);

  const isPrizes = prizes.length && !isLoading

  return {prizes, isPrizes, isLoading, isError}

}