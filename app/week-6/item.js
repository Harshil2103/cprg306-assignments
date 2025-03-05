import React from 'react';
export default function Item({ name, quantity, category }) {
    return (
      <li className="py-2 px-4 border-b">
        <p className="font-bold text-2xl">{name}</p>
        <p className="text-white-600">Buy {quantity} in {category}</p>
      </li>
    );
  }
  