import {useAppSelector} from "@/app/store/hooks";

export const useUser = () => {
    const isSmsSend = useAppSelector(state => state.userReducer.isSendSms);
    const phoneNumber = useAppSelector(state => state.userReducer.phone);
    const isLoading = useAppSelector(state => state.userReducer.isLoading);
    const isTrueCode = useAppSelector(state => state.userReducer.isTrueCode);


    return {isSmsSend, phoneNumber, isLoading, isTrueCode}
}