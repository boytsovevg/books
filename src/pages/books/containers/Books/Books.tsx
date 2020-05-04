import React, { Component, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';
import { AppDispatch, AppState } from '../../../../store/root.store';
import { connect } from 'react-redux';
import { selectBooks } from '../../store/books.selectors';
import { searchBooksThunk } from '../../store/books.thunks';

interface BooksProps {
    books: BookPreviewModel[];
    onBooksSearch: (searchTerm: string) => void;
}

class Books extends Component<BooksProps> {

    public componentDidMount(): void {
        this.props.onBooksSearch('sor');
    }

    public render(): ReactNode {
        const books = this.props.books;

        return (
            <Box>
                {
                    books.map(book => (
                        <BookPreview
                            key={ book.id }
                            book={ book }
                        />
                    ))
                }
            </Box>
        );
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBooksSearch: (searchTerm: string) => dispatch(searchBooksThunk(searchTerm)),
});

const mapStateToProps = (state: AppState) => ({
    books: selectBooks(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
