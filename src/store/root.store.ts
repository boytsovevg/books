import { rootReducer } from './root.reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware<AppState>(),
        thunk
    ]
})

export type AppDispatch = typeof store.dispatch;
