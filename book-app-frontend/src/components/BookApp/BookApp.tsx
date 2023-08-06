import React from 'react';
import Shelf from '../Shelf/Shelf';
import Reader from '../Reader/Reader';
import "./BookApp.css";
import { BookController } from '../../controllers/BookController';


class BookApp extends React.Component<{}, { books: any[], selectedBook: any }> {

    //call parent constructor > super
    //create state with empty array of books 
    constructor(props: any) {
        super(props);
        this.state = { books: [], selectedBook: { title: "", content: "" } };
        this.selectBook = this.selectBook.bind(this);
        this.updateSelectedBook = this.updateSelectedBook.bind(this);
        this.addBook = this.addBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.reloadBooks = this.reloadBooks.bind(this);
        this.saveCurrentBook = this.saveCurrentBook.bind(this);
    }
    
    // get data from backend
    // get the body from response
    // set state of component
    componentDidMount(): void {
        let res = BookController.getBooks().then((res) => {
            let body = res.data;
            this.setState({ 
                books: body, 
                selectedBook:  body.length == 0 ? {title: "", content: ""} : body[0] 
            });
        });
    }

    // get all books
    // set it to books
    async reloadBooks() {
        let res = await BookController.getBooks();
        let newBooks = res.data;
        this.setState({books: newBooks});
    }

    // saves current work
    // check if current book exist
    // if it exists, update data
    async saveCurrentBook() {
        if (this.state.selectedBook._id != undefined) {
            await BookController.updateBook(this.state.selectedBook._id, this.state.selectedBook)
        } 
    }

    // tracks which book is selected and updates the previous one
    // save current work
    // find the bbok with selected id
    // set it to be current book
    async selectBook(id: string) {
        await this.saveCurrentBook();
        let newSelectedBook = this.state.books.find(book => book._id === id);
        this.setState({selectedBook: newSelectedBook!});
    }

    // updates selected book state from reader
    // get title and content from reader
    // set state of current book with updated title and content
    updateSelectedBook(title: string, content: string) {
        let newSelectedBook = this.state.selectedBook;
        newSelectedBook!.title = title;
        newSelectedBook!.content = content;
        this.setState({selectedBook: newSelectedBook});
    }

    // adds book to list
    // saves current work
    // creates empty book
    // reloads the list of books
    // selects the current book
    async addBook() {
        await this.saveCurrentBook();
        let res = await BookController.createBook({title: "", content: ""});
        this.reloadBooks();
        await this.selectBook(res.data._id);
    }

    // deletes the book
    // save current work
    // deletes the book
    // reloads the list of books
    // selects the first available book
    async deleteBook(id: string) {
        await this.saveCurrentBook();
        await BookController.deleteBook(id);
        this.reloadBooks();
        let newSelectedBook = this.state.books[0];
        this.setState({selectedBook: newSelectedBook});
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
