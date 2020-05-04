import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware()
    ]
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
