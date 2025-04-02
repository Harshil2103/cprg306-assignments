"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ItemList from "./item-list"; 
import itemsData from "../items.json"; 
import { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

 
  if (!user) {
    router.push("/"); 
    return null; 
  }

 
  useEffect(() => {
    
    setItems(itemsData);
  }, []);

  return (
    <div>
      <h1>Your Shopping List</h1>
      <ItemList items={items} />
    </div>
  );
}
const [items, setItems] = useState([]);

useEffect(() => {
  const loadItems = async () => {
    if (user?.uid) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };
  
  loadItems();
}, [user?.uid]); // Dependency array ensures the effect runs when the user ID changes

const handleAddItem = async (newItem) => {
  if (user?.uid) {
    const itemId = await addItem(user.uid, newItem);
    setItems([...items, { id: itemId, ...newItem }]); // Add the new item to state
  }
};
