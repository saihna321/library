import React, { useState, useEffect, useCallback, useRef } from 'react';

const SearchResults = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomOfList = useRef(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    const searchQuery = `${query}`;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${(page - 1) * 10}&maxResults=10&key=AIzaSyBGU8SgTW5wTG3F5Q5cdEHop285liw2Z8k`);
    const data = await response.json();
    setBooks((prevBooks) => [...prevBooks, ...(data.items || [])]);
    setLoading(false);
  }, [query, page]);

  useEffect(() => {
    setBooks([]);  // Clear books when query changes
    setPage(1);    // Reset to page 1
  }, [query]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (bottomOfList.current) observer.observe(bottomOfList.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className='books'>
      {books.map((book) => (
        <div className='book' key={book.id}>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            style={{ width: '200px', height: '260px' }}
          />
					<div className='book-text'>
						<div className='booktitle'>{book.volumeInfo.title}</div>
						<div className='author'>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'}</div>
					</div>
          
        </div>
      ))}
      <div className='loading' ref={bottomOfList} style={{ height: '1px' }}></div>
      {loading && <p>Ачааллаж байна...</p>}
    </div>
  );
};

export default SearchResults;
