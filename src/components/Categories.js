import React from 'react';

function Categories({ onCategoryClick }) {
    const categories = ["Fiction", "Non-fiction", "Sci-Fi", "Biography", "Mystery", "Romance", "Self-Development"];

    return (
        <div className='categories'>
            {categories.map((category) => (
                <button className='category-button' key={category} onClick={() => onCategoryClick(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;
