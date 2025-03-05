"use client";

import { useState } from "react";

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

  const [itemname, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (r) => {
    r.preventDefault();
    let item = {
        name: itemname,
        category: category,
        quantity: quantity,
      };
        alert(Added item: ${name}, Category: ${category}, Quantity: ${quantity});
    console.log(item);
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="p-5"
      >
        <input
          type="text"
          id="name"
          value={itemname}
          onChange={(r) => setName(r.target.value)}
          placeholder="Item name"
          required
          className="w-full p-3 mb-5 text-black bg-white border border-gray-600 "
        />

        <div className="flex items-center mb-5">
          <div className="flex items-center justify-between px-6 py-4 w-[200px] ">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="w-12 h-10  text-black  bg-gray-400"
            >
              -
            </button>
            <div className="text-black">{quantity}</div>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="w-12 h-10  bg-blue-400 text-black "
            >
              +
            </button>
          </div>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 text-black bg-white border border-gray-800 "
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 text-black bg-blue-500   "
        >
          +
        </button>
      </form>
    </div>
  );
}