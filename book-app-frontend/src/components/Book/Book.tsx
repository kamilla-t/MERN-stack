import React from "react";
import "./Book.css";

class Book extends React.Component<{book: any, isSelected: boolean, selectBook: Function}> {

    constructor(props: any) {
        super(props);
        this.onBookClick = this.onBookClick.bind(this);
    }

    onBookClick(e: any) {
        let bookId = e.target.getAttribute('data-id');
        this.props.selectBook(bookId);
    }

    render(): React.ReactNode {
        return (
            <div className='shelf-book'>
                <span 
                    data-id={this.props.book.id}
                    style={{color: this.props.isSelected ? "red": "black"}}
                    onClick={this.onBookClick}>
                        {this.props.book.title}
                </span>
                <button>-</button>
            </div>
        );
    }
}

export default Book;