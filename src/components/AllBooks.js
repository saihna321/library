import React, { useState } from 'react';
import Categories from './Categories';
import SearchResults from './SearchResults';

const AllBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <Categories onCategoryClick={setSelectedCategory} />
      <SearchResults query={selectedCategory} />
    </div>
  );
};

export default AllBooks;
