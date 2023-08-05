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
        this.updateSelectedBook = this.updateSelectedBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
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

    // tracks which book is selected and updates the previous one
    selectBook(id: string) {
        // get reader fields
        // send update to back-end
        axios.put(`http://localhost:3000/books/${this.state.selectedBook.id}`, this.state.selectedBook)
        .then(res => {
            // find book with selected id
            // set new state for selected book
            let newSelectedBook = this.state.books.find(book => book.id === id);
            this.setState({selectedBook: newSelectedBook});
        });
    }

    updateSelectedBook(title: string, content: string) {
        let newSelectedBook = this.state.selectedBook;
        newSelectedBook.title = title;
        newSelectedBook.content = content;
        this.setState({selectedBook: newSelectedBook});
    }

    addBook() {
        axios.post("http://localhost:3000/books", {title: "", content: ""}).then(res => {
            this.selectBook(res.data.id);
        });
    }

    deleteBook(id: string) {
        axios.delete(`http://localhost:3000/books/${id}`).then(res => {
            let newSelectedBook = this.state.books[0];
            this.setState({selectedBook: newSelectedBook});
        });
    }

    render(): React.ReactNode {
        return (
            <div className='book-app'>
                <Shelf 
                    books={this.state.books} 
                    selectedBook={this.state.selectedBook} 
                    addBook={this.addBook}
                    selectBook={this.selectBook}
                    deleteBook={this.deleteBook}
                    />
                <Reader selectedBook={this.state.selectedBook} updateSelectedBook={this.updateSelectedBook} />
            </div>
        );
    }
}

export default BookApp;
