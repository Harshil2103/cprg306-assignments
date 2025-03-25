import React, { useState } from 'react';
import Item from './item'; // Ensure Item is imported here

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items based on the selected sorting option
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
      {/* Sorting Buttons */}
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

      {/* Render Sorted and Clickable Items */}
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} /> // Pass the onSelect function to Item
        ))}
      </ul>
    </>
  );
}
