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
            await BooksAPI.search(query, 10).then((searchResult) => {
                if(searchResult.error) {
                    setBooksList([]);
                } else {
                    BooksAPI.getAll().then((books) => {
                        const comparedBooks = searchResult?.map((b) => {
                        const bookTest = books?.find(x => x.id === b.id) 
                            if(bookTest)
                                b.shelf = bookTest.shelf
                                else
                                b.shelf = "none" 
                            return b 
                        })
                        setBooksList(comparedBooks);
                    });
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