import React from 'react';
import Shelf from '../Shelf/Shelf';
import Reader from '../Reader/Reader';
import "./BookApp.css";


class BookApp extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='book-app'>
                <Shelf />
                <Reader />
          </div>
        );
    }
}

export default BookApp;
