import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/app/store/rootReducer";
import {mainAPI} from "@/app/store/services/mainAPI";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainAPI.middleware),
    });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
