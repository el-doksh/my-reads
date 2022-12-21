import { useState } from "react";
import Book from "./Book";
import * as BooksAPI from '../utils/BooksAPI';
import { Link } from "react-router-dom";

const Search = () => {

    const [booksList, setBooksList] = useState([]);

    const SearchHandler = async (event) => {
        const query = event.target.value;
        if(query === ""){
            setBooksList([]);
        } else {
            await BooksAPI.search(query, 10).then((res) => {
                const searchReturnedBooks = res;
                if(searchReturnedBooks.error) {
                    setBooksList([]);
                } else {
                    BooksAPI.getAll().then((mainBooks) => {
                        searchReturnedBooks.map((book) => {
                            const foundBook = mainBooks.find((mainBook) => {
                                return mainBook.id == book.id;
                            });
                            if(foundBook){
                                book['shelf'] = foundBook.shelf;
                            } else{
                                book['shelf'] = 'none';
                            }
                        })
                    });
                    setBooksList(searchReturnedBooks);
                }
            })
        }
    }
    
    const onUpdateBook = async (book, value) => {
        await BooksAPI.update(book, value);
    }
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title, author, or ISBN" onKeyDown={SearchHandler}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {booksList.map((book) => {
                        return <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Search;