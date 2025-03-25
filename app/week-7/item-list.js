import React, { useState } from 'react';


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items
    .slice()
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  
  
   
  return (
    <>
      
      <div>
        <span className="mr-2">Sort by:</span>
        <button
          className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-green-500' : 'bg-orange-200'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`p-2 ${sortBy === 'category' ? 'bg-green-500' : 'bg-orange-200'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      
    </>
  );
}
