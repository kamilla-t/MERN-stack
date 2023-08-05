import React from "react";
import Book from "../Book/Book";
import "./Shelf.css";

class Shelf extends React.Component<{books: any[], selectedBook: any, selectBook: Function}> {
    render(): React.ReactNode {
        return (
            <div className='shelf'>
                <div className='shelf-top'>
                    <button>+</button>
                </div>
                <div className='shelf-content'>
                    {this.props.books.map(
                        book => 
                        <Book 
                            book={book} 
                            isSelected={book.id === this.props.selectedBook.id}
                            selectBook={this.props.selectBook} />
                    )}
                </div>
            </div>
        );
    }
}

export default Shelf;