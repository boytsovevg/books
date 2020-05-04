import { createAsyncThunk } from '@reduxjs/toolkit';
import booksDataService from '../data/books-data.service';

export const searchBooksThunk = createAsyncThunk(
    '[books] searchBooks',
    async (searchTerm: string) => await booksDataService.searchBooks(searchTerm)
)
