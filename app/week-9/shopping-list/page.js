// week-9/shopping-list/page.js
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ItemList from "./item-list"; // Import the ItemList component
import itemsData from "../items.json"; // Import the items from your items.json file

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

  // If user is not logged in, redirect to landing page
  if (!user) {
    router.push("/"); // redirect to landing page if not logged in
    return null; // Prevent page rendering
  }

  // Load items from the JSON file
  useEffect(() => {
    // Simulate loading items from the JSON file (itemsData is imported at the top)
    setItems(itemsData);
  }, []);

  return (
    <div>
      <h1>Your Shopping List</h1>
      <ItemList items={items} />
    </div>
  );
}
