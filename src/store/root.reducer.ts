import { combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '../pages/books/store/books.reducer';

export const rootReducer = combineReducers({
    books: booksReducer
});
