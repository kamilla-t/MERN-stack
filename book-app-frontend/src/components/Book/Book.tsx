import React from "react";
import "./Book.css";

class Book extends React.Component<{book: any, isSelected: boolean, selectBook: Function, deleteBook: Function}> {

    constructor(props: any) {
        super(props);
        this.onBookClick = this.onBookClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onBookClick(e: any) {
        let bookId = e.target.getAttribute('data-id');
        this.props.selectBook(bookId);
    }

    onDeleteClick(e: any) {
        let bookId = e.target.getAttribute('data-id');
        this.props.deleteBook(bookId);
    }

    render(): React.ReactNode {
        return (
            <div className='shelf-book'>
                <span 
                    className="shelf-book-title"
                    data-id={this.props.book.id}
                    style={{color: this.props.isSelected ? "red": "black"}}
                    onClick={this.onBookClick}>
                        {this.props.book.title}
                </span>
                <button data-id={this.props.book.id} onClick={this.onDeleteClick}>-</button>
            </div>
        );
    }
}

export default Book;