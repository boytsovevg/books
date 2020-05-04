import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { booksReducer } from '../pages/books/store/books.reducer';
import { History, LocationState } from 'history';

export const createRootReducer = (history: History<LocationState>) => combineReducers({
    router: connectRouter(history),
    books: booksReducer
})
