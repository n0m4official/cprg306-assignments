"use client";

import React, { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Clean up item names for API compatibility
  const handleItemSelect = (item) => {
    let cleanedName = item.name
      .split(",")[0] // remove weight/size after comma
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
        "" // remove emoji
      )
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Shopping List & Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: New item form + shopping list */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right: Meal ideas */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
