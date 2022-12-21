import PropTypes from 'prop-types';

const Book = ({book, onUpdateBook}) => {
    const updateBookHandler = async (event) => {
        onUpdateBook(book, event.target.value)
    }
    var imgUrl = book.imageLinks && book.imageLinks.smallThumbnail ?  book.imageLinks.smallThumbnail : "";
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${ imgUrl })`,
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={updateBookHandler} defaultValue={book.shelf}>
                            <option value="none" disabled >Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ""}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
};

export default Book;