"use client";

import React from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

// Main page component for Week 3 assignment
export default function Page() {
  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-gray-50 rounded shadow mt-10">
      {/* Page header */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Shopping List
      </h1>
      {/* Add Item Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Item List */}
      <ItemList items={items} />
    </main>
  );
}
