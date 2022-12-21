import React, {useState, useEffect} from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import BookShelf from "./BookShelf";

const List = ({setShowSearchpage}) => {
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        getBooksList()
    }, [])

    const getBooksList = async () => {
        const res = await BooksAPI.getAll();
        setCurrentlyReadingBooks(
            res.filter((book) => {
                return book.shelf === "currentlyReading";
            })
        )
        setWantToReadBooks(
            res.filter((book) => {
                return book.shelf === "wantToRead";
            })
        )
        setReadBooks(
            res.filter((book) => {
                return book.shelf === "read";
            })
        )
    }

    const updateBook = async (book, value) => {
        await BooksAPI.update(book, value);
        getBooksList()
    }
    

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf key="Currently Reading" title="Currently Reading" books={currentlyReadingBooks} onUpdateBook={updateBook}/>
                    <BookShelf key="Want to Read" title="Want to Read" books={wantToReadBooks} onUpdateBook={updateBook}/>
                    <BookShelf key="Read" title="Read" books={readBooks} onUpdateBook={updateBook}/>
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => setShowSearchpage(true)}>Search for a book</a>
            </div>
        </div>
    );
}

export default List;