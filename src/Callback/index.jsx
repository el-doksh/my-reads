import React, { useState, useCallback, useEffect, memo } from 'react';

export const ComponentCallback = () =>  {
  
  const [count, setCount] = useState(0);
  const [searchBook, setsearchBook] = useState('');

  const getBooks = () => {
      const myBooks = [
        'react',
        'php',
        'java',
        'html',
        'css'
      ];
      console.log('api fired');

      return myBooks.filter(book => book.includes(searchBook))
  }

  const onIncrementHandler = () => {
    setCount(count + 1);
  }
  
  const onSearchHandler = value => {
    setsearchBook(value)
  }

  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <CounterComponent
          onIncrement={onIncrementHandler}
          count={count}
        />
        <hr />
        <BooksList
          onSearch={onSearchHandler}
          search={searchBook}
          getBooks={getBooks}
        />
    </div>
  )
}

export const Counter = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Increment
    </button>
  );
};

export const CounterComponent = ({
  count,
  onIncrement,
}) => {
  console.log('CounterComponent rendered');
  return (
    <div>
      <h1>Counter: {count}</h1>
      <Counter onClick={onIncrement} title='increment' />
    </div>
  );
};

export const BooksList = ({
  search,
  onSearch,
  getBooks
}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks)
    console.log('setBooks fired');
  }, [getBooks])
  
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
    <h1>Books List: </h1>
      <input type='text' onChange={e => onSearch(e.target.value)} value={search} />
      {books.map(book => (
        
        <ul>
          <li>{book}</li>
        </ul>
      
      ))}
    </div>
  );
}

