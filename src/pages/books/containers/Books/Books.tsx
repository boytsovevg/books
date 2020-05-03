import React, { Component, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';

export interface BooksState {
    books: BookPreviewModel[];
}

class Books extends Component<{}, BooksState> {

    public componentDidMount(): void {
    }

    public render(): ReactNode {

        const books = this.state.books;

        return (
            <Box>
                {
                    books.map(book => (
                        <BookPreview
                            key={book.id}
                            book={book}
                        />
                    ))
                }
            </Box>
        )
    }
}

export default Books;
