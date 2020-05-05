import { createReducer } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { setBooksAction, setSelectedBookAction, updateBookAction } from './books.actions';
import { loadBookThunk, searchBooksThunk } from './books.thunks';
import { BooksAdapterService } from '../services/books-adapter.service';

export interface BooksState {
    books: BookDto[];
    searchedBooks: BookDto[];
    selectedBook: BookDto | undefined;
}

const initialState: BooksState = {
    books: [],
    searchedBooks: [],
    selectedBook: undefined
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
        .addCase(
            loadBookThunk.fulfilled, (state, action) => ({
                ...state,
                books: [
                    action.payload,
                    ...state.books,
                ]
            })
        )
        .addCase(
            setSelectedBookAction, (state, action) => ({
                ...state,
                selectedBook: state.searchedBooks.find(sb => sb.id === action.payload)
            })
        )
})
