import React, { Component, ReactNode } from 'react';
import { BookEditForm } from '../../components/BookEditForm/BookEditForm';
import { connect } from 'react-redux';
import { AppDispatch, AppState } from '../../../../store/root.store';
import { updateBookAction } from '../../store/books.actions';
import { RouteComponentProps, match } from 'react-router';
import { selectBookModel } from '../../store/books.selectors';
import { BookModel } from '../../models/book.model';

export interface BookEditProps {
    match: match<{ id?: string }>
    book: BookModel | undefined;
    onBookSave: (book: BookModel) => void;
}

export interface BookEditState {
    bookData: BookModel;
}

class BookEdit extends Component<BookEditProps, BookEditState> {

    public state: BookEditState = {
        bookData: {
            title: '',
            author: '',
            categories: [],
            iconUrl: ''
        }
    }

    public componentDidMount(): void {
        const { book } = this.props;

        if (book) {
            this.setState({
                bookData: book
            });
        }
    }

    public handleSaveBook = (book: BookModel) => {
        this.props.onBookSave(book);
    }

    public render(): ReactNode {

        return (
            <>
                <BookEditForm
                    book={this.state.bookData}
                />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBookSave: (book: BookModel) => dispatch(updateBookAction(book))
})

const mapStateToProps = (state: AppState, props: RouteComponentProps<{ id: string }> ) => ({
    book: selectBookModel(props.match.params.id)(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);

