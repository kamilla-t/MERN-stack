import React from 'react';
import Shelf from '../Shelf/Shelf';
import Reader from '../Reader/Reader';
import "./BookApp.css";
import axios from 'axios';


class BookApp extends React.Component<{}, { books: any[], selectedBook: any }> {

    //call parent constructor > super
    //create state with empty array of books 
    constructor(props: any) {
        super(props);
        this.state = { books: [], selectedBook: {title: "", content: ""} };
        this.selectBook = this.selectBook.bind(this);
    }
    
    // get data from backend
    // get the body from response
    // set state of component
    componentDidMount(): void {
        axios.get("http://localhost:3000/books").then((res) => {
            let body = res.data;
            this.setState({ 
                books: body, 
                selectedBook:  body.length == 0 ? {title: "", content: ""} : body[0] 
            });
           
        });
    }

    // tracks which book is selected
    // find book with selected id
    // set new state for selected book
    selectBook(id: string) {
        let newSelectedBook = this.state.books.find(book => book.id === id);
        this.setState({selectedBook: newSelectedBook});
    }

    render(): React.ReactNode {
        return (
            <div className='book-app'>
                <Shelf 
                    books={this.state.books} 
                    selectedBook={this.state.selectedBook} 
                    selectBook={this.selectBook}
                    />
                <Reader selectedBook={this.state.selectedBook} />
            </div>
        );
    }
}

export default BookApp;
