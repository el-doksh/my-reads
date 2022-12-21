import React, {useState, useEffect} from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom';

const List = () => {
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

    const bookShelves = [
        {
            id:"1",
            title:"Currently Reading",
            books:currentlyReadingBooks,
        },
        {
            id:"2",
            title:"Want to Read",
            books:wantToReadBooks,
        },
        {
            id:"3",
            title:"Read",
            books:readBooks,
        },
    ];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {bookShelves.map((bookShelve) => {
                            return  <BookShelf key={bookShelve.id} title={bookShelve.title} books={bookShelve.books} onUpdateBook={updateBook}/>
                        }
                    )}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Search for a book
                </Link>
            </div>
        </div>
    );
}

export default List;