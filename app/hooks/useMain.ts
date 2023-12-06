import {useAppSelector} from "@/app/store/hooks";

export const useMain = () => {
  const isLoading = useAppSelector(state => state.mainReducer.isLoading);
  const {time, title, type, body}  =useAppSelector(state => state.mainReducer.drawing)
  const accounts  =useAppSelector(state => state.mainReducer.accounts)

  const isWinnersLoading = accounts.length === 0
  const five = accounts.slice(0, 5).map(item => item.account)
  const winners = accounts.length ? five : null
  const allRandomAccs = [...accounts].sort(() => Math.random() - 0.5);

  const counts = Math.floor((accounts.length) / 5);
  const winners1 = [...accounts].slice(0, counts * 1).sort(() => Math.random() - 0.5);
  const winners2 = [...accounts].slice(counts * 1 , counts * 2 ).sort(() => Math.random() - 0.5);
  const winners3 = [...accounts].slice(counts * 2 , counts * 3 ).sort(() => Math.random() - 0.5);
  const winners4 = [...accounts].slice(counts * 3 , counts * 4 ).sort(() => Math.random() - 0.5);
  const winners5 = [...accounts].slice(counts * 4 , counts * 5 ).sort(() => Math.random() - 0.5);

  const isFiveWinner = type.toString() === '20'
  const isOneWinner = type.toString() === '21' || type.toString() ==='22'



  return {
    isLoading,
    time,
    title,
    type,
    body,
    accounts,
    winners1,
    winners2,
    winners3,
    winners4,
    winners5,
    winners,
    allRandomAccs,
    isFiveWinner,
    isOneWinner,
    isWinnersLoading
  }
}