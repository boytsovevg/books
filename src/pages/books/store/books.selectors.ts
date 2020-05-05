import { AppState } from '../../../store/root.store';
import { createSelector } from '@reduxjs/toolkit';
import { BooksState } from './books.reducer';
import { BookDto } from '../data/dto/book.dto';
import { BooksAdapterService } from '../services/books-adapter.service';

const selectBooksSlice = (state: AppState) => state.books;

export const selectSearchedBooks = createSelector(
    selectBooksSlice,
    (state: BooksState) => state.searchedBooks
);

export const selectSearchedBooksPreview = createSelector(
    selectSearchedBooks,
    (searchedBooks: BookDto[]) => searchedBooks.map(book => BooksAdapterService.convertToBookPreviewModel(book))
);

export const selectBooks = createSelector(
    selectBooksSlice,
    state => state.books
);

export const selectBook = (bookId: string) => createSelector(
    selectBooks,
    (books: BookDto[]) => {
        return books.find(b => b.id === bookId);
    }
)

export const selectBookModel = (bookId: string) => createSelector(
    selectBook(bookId),
    (book: BookDto | undefined) => {
        if (!book) {
            return;
        }

        return BooksAdapterService.convertToBookModel(book);
    }
)
