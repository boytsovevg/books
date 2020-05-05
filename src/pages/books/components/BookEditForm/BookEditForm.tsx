import { Box } from '@material-ui/core';
import React from 'react';
import { BookModel } from '../../models/book.model';

export interface BookProps {
    book: BookModel;
}

export const BookEditForm = ({ book }: BookProps) => {

    return (
        <Box>
            { book.title }
        </Box>
    )
}
