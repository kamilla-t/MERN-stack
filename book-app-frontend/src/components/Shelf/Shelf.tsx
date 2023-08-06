import React from "react";
import Book from "../Book/Book";
import "./Shelf.css";

class Shelf extends React.Component<{books: any[], selectedBook: any, addBook: Function, selectBook: Function, deleteBook: Function}> {
    render(): React.ReactNode {
        return (
            <div className='shelf'>
                <div className='shelf-top'>
                    <button onClick={() => this.props.addBook()}>+</button>
                </div>
                <div className='shelf-content'>
                    {this.props.books.map(
                        book => 
                        <Book 
                            book={book} 
                            isSelected={book._id === this.props.selectedBook?._id}
                            selectBook={this.props.selectBook} 
                            deleteBook={this.props.deleteBook} 
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Shelf;