import React, { Component, ReactNode } from 'react';
import { Box, Button } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';
import { AppDispatch, appHistory, AppState } from '../../../../store/root.store';
import { connect } from 'react-redux';
import { loadBooksThunk } from '../../store/books.thunks';
import { selectBookPreviews } from '../../store/books.selectors';

interface BooksProps {
    books: BookPreviewModel[];
    onBooksLoad: (userId: string) => void;
}

class Books extends Component<BooksProps> {

    public componentDidMount(): void {
        this.props.onBooksLoad('11');
    }

    public handleCreateButtonClick = () => {
        appHistory.push('/books/create');
    }

    public goToBook = (id: string) => {
        appHistory.push(`/books/${id}/edit`);
    }

    public render(): ReactNode {
        const books = this.props.books;

        return (
            <Box
                padding={2}
            >
                <Button
                    onClick={this.handleCreateButtonClick}
                >
                    Create
                </Button>
                <Box
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 250px)',
                        gridGap: 20,
                        marginTop: 30
                    }}
                >
                    {
                        books.map(book => (
                            <BookPreview
                                key={book.id}
                                book={book}
                                onBookEdit={this.goToBook}
                            />
                        ))
                    }
                </Box>
            </Box>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBooksLoad: (userId: string) => dispatch(loadBooksThunk(userId))
})

const mapStateToProps = (state: AppState) => ({
    books: selectBookPreviews(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);
