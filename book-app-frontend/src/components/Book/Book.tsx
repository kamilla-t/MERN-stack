import React from "react";
import "./Book.css";

class Book extends React.Component<{title: string}> {
    render(): React.ReactNode {
        return (
            <div className='shelf-book'>
                {this.props.title}
                <button>-</button>
            </div>
        );
    }
}

export default Book;