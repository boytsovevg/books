import { Box } from '@material-ui/core';
import React from 'react';

export interface BookModel {
    id: string;
    title: string;
    description: string;
    author: string;
    iconUrls: {
        small: string;
        default: string;
    }
}

export interface BookProps {
    book: BookModel;
}

export const Book = ({ book }: BookProps) => {

    return (
        <Box>
            { book.title }
        </Box>
    )
}
