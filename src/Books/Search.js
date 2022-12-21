
const Search = ({setShowSearchpage}) => {

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search"
                    onClick={() => setShowSearchpage(false)}
                    >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title, author, or ISBN"/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
}

export default Search;