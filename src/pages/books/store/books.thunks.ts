import { createAsyncThunk } from '@reduxjs/toolkit';
import booksDataService from '../data/books-data.service';

export const searchBooksThunk = createAsyncThunk(
    '[books] searchBooksThunk',
    async (searchTerm: string) => await booksDataService.searchBooks(searchTerm)
);

export const loadBookThunk = createAsyncThunk(
    '[books] loadBookThunk',
    async (id: string) => await booksDataService.getBook(id)
);

export const loadBooksThunk = createAsyncThunk(
    '[books] loadBooksThunk',
    async (userId: string) => await booksDataService.getBooks(userId)
);
