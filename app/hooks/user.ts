import {useAppSelector} from "@/app/store/hooks";

export const useUser = () => {
    const isSmsSend = useAppSelector(state => state.userReducer.isSendSms);
    const phoneNumber = useAppSelector(state => state.userReducer.phone);
    const isLoading = useAppSelector(state => state.userReducer.isLoading);
    const isTrueCode = useAppSelector(state => state.userReducer.isTrueCode);
    const isError = useAppSelector(state => state.userReducer.isError);
    const error = useAppSelector(state => state.userReducer.message)

    return {isSmsSend, phoneNumber, isLoading, isTrueCode, isError, error}
}