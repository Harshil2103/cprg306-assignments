"use client";

import React, { useState } from 'react';

function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1); // reset quantity
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2"></label>
        <div className="flex items-center">
          
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="20"
            required
            className="w-16 text-center  text-gray-800"
          />
          <button type="button" onClick={decrement} className="px-3 py-1 bg-blue-800 rounded">-</button>
          <button type="button" onClick={increment} className="px-3 py-1 bg-blue-800 rounded">+</button>

          <div className="mb-4">
        <label htmlFor="category" className=" text-gray-700 font-bold mb-2"></label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 border rounded text-gray-800"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
        </div>
      </div>
      
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded">+</button>
    </form>
  );
}

export default NewItem;