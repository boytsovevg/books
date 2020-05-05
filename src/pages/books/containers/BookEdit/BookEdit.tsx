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

class BookEdit extends Component<BookEditProps> {

    public handleSaveBook = (book: BookModel) => {
        this.props.onBookSave(book);
    }

    public render(): ReactNode {

        const { book } = this.props;

        return (
            book &&
                <BookEditForm
                    book={book}
                />
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

