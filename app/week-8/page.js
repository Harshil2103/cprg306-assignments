"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";  // Import the MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItems, setSelectedItems] = useState([]); // Store selected items as an array

  // Handle adding a new item to the shopping list
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Handle item selection from the list
  function handleItemSelect(itemName) {
    setSelectedItems((prevSelectedItems) => {
      // Toggle item selection
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter(item => item !== itemName);  // Remove item if already selected
      } else {
        return [...prevSelectedItems, itemName];  // Add item if not selected
      }
    });
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />  {/* Pass onItemSelect to ItemList */}
      </div>
      <div style={{ flex: 2 }}>
        {/* Display the "Meal Ideas" header */}
        <h2 className="text-2xl font-semibold mb-4">
          Meal Ideas: Here are some meal ideas using the selected ingredients:
        </h2>

        {/* Render MealIdeas component based on the selected items */}
        {selectedItems.length > 0 && (
          <MealIdeas ingredients={selectedItems} />
        )}
      </div>
    </div>
  );
}
