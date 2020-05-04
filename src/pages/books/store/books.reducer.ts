import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { setBooksAction } from './books.actions';

export interface BooksState {
    books: BookDto[];
}

const initialState: BooksState = {
    books: []
};

export const booksReducer = createReducer<BooksState>(initialState, {
    [setBooksAction.type]: (state: BooksState, action: PayloadAction<BookDto[]>) => ({ ...state, books: action.payload })
})
