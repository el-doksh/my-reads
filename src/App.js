import "./App.css";
import { useState } from "react";
import List from "./Books/List";
import Search from "./Books/Search";
import * as BooksAPI from './utils/BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const onSearchBook = async (query) => {
      const res = await BooksAPI.search(query, 10);
      console.log('serch', res);
  }
  return (
    <div className="app">
      {showSearchPage ? <Search setShowSearchpage={setShowSearchpage} onSearchBook={onSearchBook} /> : <List setShowSearchpage={setShowSearchpage} />}
    </div>
  );
}

export default App;
