"use client";

import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <p className="mb-4 font-medium">
            You must be logged in to view this page.
          </p>
          <a
            href="/week-9"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Return to login
          </a>
        </div>
      </main>
    );
  }

  const handleAddItem = (newItem) => setItems((prev) => [...prev, newItem]);

  const handleItemSelect = (item) => {
    const cleaned = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
        ""
      )
      .toLowerCase();
    setSelectedItemName(cleaned);
  };

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 rounded shadow mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Shopping List & Meal Ideas</h1>
        <button
          onClick={firebaseSignOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
