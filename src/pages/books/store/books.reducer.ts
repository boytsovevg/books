import { createReducer } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { setBooksAction, updateBookAction } from './books.actions';
import { searchBooksThunk } from './books.thunk';
import { BooksAdapterService } from '../services/books-adapter.service';

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
        .addCase(
            updateBookAction, (state, action) => ({
                ...state,
                books: state.books.map(
                    book => book.id === action.payload.id
                    ? BooksAdapterService.updateBookDto(book, action.payload)
                    : book
                )
            })
        )
})
