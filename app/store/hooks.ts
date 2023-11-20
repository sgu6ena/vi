import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/store/store";
import {useMemo} from 'react'
import {bindActionCreators} from 'redux'
import {allActions} from "@/app/store/rootActions";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
