import React, { Component, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { BookPreview, BookPreviewModel } from '../../components/BookPreview/BookPreview';
import { AppDispatch, AppState } from '../../../../store/root.store';
import { connect } from 'react-redux';
import { searchBooksThunk } from '../../store/books.thunk';
import { selectSearchedBooksPreview } from '../../store/books.selectors';

interface BooksProps {
    books: BookPreviewModel[];
    onBooksSearch: (searchTerm: string) => void;
}

class Books extends Component<BooksProps> {

    public componentDidMount(): void {
        this.props.onBooksSearch('musk');
    }

    public render(): ReactNode {
        const books = this.props.books;

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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBooksSearch: (searchTerm: string) => dispatch(searchBooksThunk(searchTerm))
})

const mapStateToProps = (state: AppState) => ({
    books: selectSearchedBooksPreview(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);
