
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ItemList from "./item-list"; 
import itemsData from "../items.json"; 

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
