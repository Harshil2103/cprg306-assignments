'use client'; 

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1); 
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
        <span className="text-xl font-semibold w-10 ">{quantity}</span>
      <button onClick={decrement}  disabled={quantity === 1}  className={`  px-3 rounded tet-white font-bold ${quantity > 1 ? "bg-blue-300" : "bg-gray-400"}`}>
        -
      </button>
      <button onClick={increment} disabled={quantity === 20}  className="bg-blue-400 px-3 rounded text-white font-bold">
        +
      </button>
    </div>
  );
}
