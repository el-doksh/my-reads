import "./App.css";
import { useState } from "react";
import List from "./Books/List";
import Search from "./Books/Search";
import * as BooksAPI from './utils/BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  return (
      <div className="app">
          {showSearchPage ? <Search setShowSearchpage={setShowSearchpage} /> : <List setShowSearchpage={setShowSearchpage} />}
      </div>
  );
}

export default App;
