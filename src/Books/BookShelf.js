import Book from "./Book";
import PropTypes from 'prop-types';

const BookShelf = ({title, books, onUpdateBook}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        return <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>
                    })}
                </ol>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
};

export default BookShelf;