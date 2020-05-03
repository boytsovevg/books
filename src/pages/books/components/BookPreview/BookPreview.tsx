import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import React from 'react';
import { Create } from '@material-ui/icons';

export interface BookPreviewProps {
    book: BookPreviewModel;
}

export interface BookPreviewModel {
    id: string;
    title: string;
    author: string;
    icon: string;
}

export const BookPreview = ({ book }: BookPreviewProps) => {

    return (
        <Card>
            <CardMedia
                image={book.icon}
                title={book.title}
            />
            <CardHeader
                title={book.title}
                subheader={book.author}
                action={
                    <IconButton aria-label="settings">
                        <Create />
                    </IconButton>
                }
            />
        </Card>
    )
}
