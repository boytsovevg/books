import React, { Component, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';
import booksDataService from '../../data/books-data.service';
import { AppDispatch, AppState } from '../../../../store/root.store';
import { setBooksAction } from '../../store/books.actions';
import { BookDto } from '../../data/dto/book.dto';
import { connect } from 'react-redux';
import { BooksAdapterService } from '../../services/books-adapter.service';

interface BooksProps {
    books: BookPreviewModel[];
    onBooksFound: (books: BookDto[]) => void;
}

class Books extends Component<BooksProps> {

    public componentDidMount(): void {
        booksDataService.searchBooks('asy')
            .then(pagedBooks => (
                this.props.onBooksFound(pagedBooks.items)
            ));
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
    onBooksFound: (books: BookDto[]) => dispatch(setBooksAction(books))
});

const mapStateToProps = (state: AppState) => ({
    books: state.books.books.map(book => BooksAdapterService.convertToBookPreviewModel(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
