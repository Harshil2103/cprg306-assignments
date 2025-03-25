"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";  
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItems, setSelectedItems] = useState([]); 

  
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  
  function handleItemSelect(itemName) {
    setSelectedItems((prevSelectedItems) => {
      
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter(item => item !== itemName); 
      } else {
        return [...prevSelectedItems, itemName];
      }
    });
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />  
      </div>
      <div style={{ flex: 2 }}>
        
        <h2 className="text-2xl font-semibold mb-4">
          Meal Ideas: Here are some meal ideas using the selected ingredients:
        </h2>

        
        {selectedItems.length > 0 && (
          <MealIdeas ingredients={selectedItems} />
        )}
      </div>
    </div>
  );
}
