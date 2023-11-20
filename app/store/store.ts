import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/app/store/rootReducer";
import { registerAPI } from "@/app/store/services/registerAPI";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(registerAPI.middleware),
    });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
