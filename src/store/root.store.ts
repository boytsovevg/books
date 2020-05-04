import { rootReducer } from './root.reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware<AppState>(),
    ]
})

export type AppDispatch = typeof store.dispatch;
