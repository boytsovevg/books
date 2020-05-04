import { createReducer } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { setBooksAction } from './books.actions';
import { searchBooksThunk } from './books.thunk';

export interface BooksState {
    books: BookDto[];
    searchedBooks: BookDto[];
}

const initialState: BooksState = {
    books: [],
    searchedBooks: []
}

export const booksReducer = createReducer(initialState, builder => {
    builder
        .addCase(
            setBooksAction, (state, action) => ({
                ...state,
                books: action.payload
            })
        )
        .addCase(
            searchBooksThunk.fulfilled, (state, action) => ({
                ...state,
                searchedBooks: action.payload.items
            }),
        )
})
