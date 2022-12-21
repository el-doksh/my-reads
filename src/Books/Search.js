import { useState } from "react";
import Book from "./Book";
import * as BooksAPI from '../utils/BooksAPI';

const Search = ({setShowSearchpage, onSearchBook}) => {

    const [booksList, setBooksList] = useState([]);
    const SearchHandler = async (event) => {
        const res = await BooksAPI.search(event.target.value, 10);
        setBooksList(res);
    }
    const onUpdateBook = async (book, value) => {
        await BooksAPI.update(book, value);
    }
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search"
                    onClick={() => setShowSearchpage(false)}
                    >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title, author, or ISBN" onChange={SearchHandler}/>
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