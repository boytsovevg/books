import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createRootReducer } from './root.reducer';

export const appHistory = createBrowserHistory();
export const rootReducer = createRootReducer(appHistory);

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware()
    ]
})

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
