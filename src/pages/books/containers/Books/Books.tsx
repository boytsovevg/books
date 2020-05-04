import React, { Component, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';
import booksDataService from '../../data/books-data.service';
import { BooksAdapterService } from '../../services/books-adapter.service';

interface BooksState {
    books: BookPreviewModel[];
}

class Books extends Component<{}, BooksState> {

    public state: BooksState = {
        books: []
    };

    public componentDidMount(): void {
        booksDataService.searchBooks('musk')
            .then(pagedBooks => (
                this.setState({
                    books: pagedBooks.items.map(book => BooksAdapterService.convertToBookPreviewModel(book))
                })
            ))
    }

    public render(): ReactNode {
        const books = this.state.books;

        return (
            <Box
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 250px)',
                    gridGap: 20,
                    padding: 30
                }}
            >
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
