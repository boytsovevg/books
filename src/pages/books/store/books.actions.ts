import { createAction } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';
import { BookModel } from '../models/book.model';

export const setBooksAction = createAction<BookDto[]>(
    '[books] setBooksAction'
);

export const updateBookAction = createAction<BookModel>(
    '[books] updateBookAction'
);
