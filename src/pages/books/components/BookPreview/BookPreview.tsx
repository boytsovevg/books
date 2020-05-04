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

    const shortTitle = book.title.length > 30
        ? book.title.slice(0, 30) + '...'
        : book.title;

    return (
        <Card>
            <CardMedia
                image={book.icon}
                title={book.title}
                style={{
                    height: 150,
                    width: '100%',
                    backgroundSize: 'contain'
                }}
            />
            <CardHeader
                title={shortTitle}
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
