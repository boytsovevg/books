import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { setBooksAction } from './books.actions';
import { searchBooksThunk } from './books.thunks';

export interface BooksState {
    books: BookDto[];
    searchedBooks: BookDto[];
}

const initialState: BooksState = {
    books: [],
    searchedBooks: []
};

export const booksReducer = createReducer<BooksState>(initialState, builder => {
    builder
        .addCase(
            setBooksAction, (state, action: PayloadAction<BookDto[]>) => ({
                ...state, books: action.payload
            })
        )
        .addCase(
            searchBooksThunk.fulfilled, (state, action) => ({
                ...state, searchedBooks: action.payload.items
            })
        );

});
