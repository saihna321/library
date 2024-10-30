import React, { useState, useEffect } from 'react';

const SearchResults = ({ query }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const searchQuery = query || "fiction"; // Default query if none provided
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBGU8SgTW5wTG3F5Q5cdEHop285liw2Z8k`);
      const data = await response.json();
      setBooks(data.items || []);
    };

    fetchBooks();
  }, [query]);

  return (
    <div >
      <h2>Books</h2>
      <div className='books'>
        {books.map((book) => (
          <div key={book.id}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              style={{ width: '100px', height: 'auto' }}
            />
            <h3>{book.volumeInfo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SearchResults;



// `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBGU8SgTW5wTG3F5Q5cdEHop285liw2Z8k`