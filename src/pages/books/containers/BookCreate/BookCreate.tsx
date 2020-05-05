import React, { ChangeEvent, Component, ReactNode } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { BookPreviewModel } from '../../components/BookPreview/BookPreview';
import { connect } from 'react-redux';
import { AppDispatch, appHistory, AppState } from '../../../../store/root.store';
import { selectSearchedBooksPreview, selectSelectedBook } from '../../store/books.selectors';
import { BookModel } from '../../models/book.model';
import { setSelectedBookAction } from '../../store/books.actions';
import { loadBookThunk, searchBooksThunk } from '../../store/books.thunks';

export interface BookCreateProps {
    searchedBooks: BookPreviewModel[];
    selectedBook?: BookModel;
    onBookSearch: (searchTerm: string) => void;
    onBookSelect: (bookId: string) => void;
    onBookSave: (bookId: string) => void;
}

class BookCreate extends Component<BookCreateProps> {

    public handleSelectBook = (event: ChangeEvent<{}>, book: BookPreviewModel | null) => {
        if (book) {
            this.props.onBookSelect(book.id);
        }
    };

    public handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (value && value.length > 2) {
            this.props.onBookSearch(value);
        }
    };

    public handleSaveClick = () => {
        const { selectedBook } = this.props;

        if (selectedBook) {
            this.props.onBookSave(selectedBook.id);
            appHistory.push('/books');
        }
    }

    public render(): ReactNode {
        const { searchedBooks, selectedBook } = this.props;

        return (
            <Box
                width={ 700 }
                padding={ 2 }
            >
                <Button
                    disabled={!this.props.selectedBook}
                    onClick={this.handleSaveClick}
                >
                    Save
                </Button>

                <Autocomplete
                    options={ searchedBooks }
                    getOptionSelected={ (option, value) => option.id === value.id }
                    getOptionLabel={ (option) => option.title }
                    fullWidth={ true }
                    onChange={ this.handleSelectBook }
                    renderInput={
                        (params) =>
                            <TextField
                                { ...params }
                                label="Search book"
                                variant="outlined"
                                onChange={ this.handleSearchTermChange }
                            />
                    }
                />
                {
                    selectedBook &&
                    <Box
                        display="flex"
                        marginTop={2}
                    >
                        <Box>
                            <Typography variant="h2">{ selectedBook.title }</Typography>
                            <Typography>Author: { selectedBook.author }</Typography>
                        </Box>
                        <Box>
                            <img width={300} height={400} src={selectedBook.iconUrl} alt={selectedBook.title}/>
                        </Box>
                    </Box>
                }
            </Box>
        );
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBookSelect: (bookId: string) => dispatch(setSelectedBookAction(bookId)),
    onBookSearch: (searchTerm: string) => dispatch(searchBooksThunk(searchTerm)),
    onBookSave: (bookId: string) => dispatch(loadBookThunk(bookId))
});


const mapStateToProps = (state: AppState) => ({
    searchedBooks: selectSearchedBooksPreview(state),
    selectedBook: selectSelectedBook(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCreate);
