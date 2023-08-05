import React from "react";
import Book from "../Book/Book";
import "./Shelf.css";

class Shelf extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='shelf'>
                <div className='shelf-top'>
                    <button>+</button>
                </div>
                <div className='shelf-content'>
                    <Book title="Book 1" />
                    <Book title="Book 2" />
                    <Book title="Book 3" />
                </div>
            </div>
        );
    }
}

export default Shelf;