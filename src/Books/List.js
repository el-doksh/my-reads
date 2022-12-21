import React, {useState, useEffect} from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import BookShelf from "./BookShelf";

const List = ({setShowSearchpage}) => {
    const [booksList, setBooksList] = useState([]);
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {

        const booksData = async () => {
            const res = await BooksAPI.getAll();
            setBooksList(res)
            // setCurrentlyReadingBooks(
                // res.filter((book) => {
                // return book.shelf === "currentlyReading";
                // })
            // )
            // setWantToReadBooks(
            //     res.filter((book) => {
            //     return book.shelf === "wantToRead";
            //     })
            // )
            // setReadBooks(
            //     res.filter((book) => {
            //     return book.shelf === "read";
            //     })
            // )
        }
        booksData()
    }, [])

     setCurrentlyReadingBooks(
                booksList.filter((book) => {
                return book.shelf === "currentlyReading";
                })
            )
            setWantToReadBooks(
                booksList.filter((book) => {
                return book.shelf === "wantToRead";
                })
            )
            setReadBooks(
                booksList.filter((book) => {
                return book.shelf === "read";
                })
            )
        
    console.log(booksList);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {/* { booksList.filter((book) => {
                        return book.shelf === "currentlyReading";
                    })
                    } */}
                    <BookShelf key="Currently Reading" title="Currently Reading" books={currentlyReadingBooks}/>
                    <BookShelf key="Want to Read" title="Want to Read" books={wantToReadBooks}/>
                    <BookShelf key="Read" title="Read" books={readBooks}/>
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => setShowSearchpage(true)}>Search for a book</a>
            </div>
        </div>
    );
}

export default List;