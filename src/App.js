import "./App.css";
import List from "./Books/List";
import Search from "./Books/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
      <div className="app">
        <Routes>
            <Route exact path="/" element={ <List /> }/>
            <Route path="/search" element={ <Search />}/>
        </Routes>
      </div>
  );
}

export default App;
