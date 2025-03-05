"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <button
          className={`mr-2 p-4 ${sortBy === 'name' ? 'bg-green-500' : 'bg-orange-200'}`}
          onClick={() => setSortBy('name')}
        >
        Name
        </button>
        <button
          className={`p-4 ${sortBy === 'category' ? 'bg-green-500' : 'bg-orange-200'}`}
          onClick={() => setSortBy('category')}
        >
        Category
        </button>
      </div>
      <div>
        {sItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}