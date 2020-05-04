import { createAction } from '@reduxjs/toolkit';
import { BookDto } from '../data/dto/book.dto';

export const setBooksAction = createAction<BookDto[]>(
    '[books] setBooksAction'
);
