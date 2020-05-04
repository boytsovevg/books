import { AppState } from '../../../store/root.store';
import { createSelector } from '@reduxjs/toolkit';
import { BooksState } from './books.reducer';
import { BooksAdapterService } from '../services/books-adapter.service';

export const selectBooksSlice = (state: AppState) => state.books;

export const selectBooks = createSelector(
    selectBooksSlice,
    (state: BooksState) => state.books.map(
        book => BooksAdapterService.convertToBookPreviewModel(book)
    )
);
