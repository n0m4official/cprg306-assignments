"use client";

import React, { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Work on a copy (immutability)
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div className="p-4">
      {/* Sort Controls */}
      <div className="mb-4 flex gap-2 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded text-white ${
            sortBy === "name" ? "bg-green-600" : "bg-gray-400"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded text-white ${
            sortBy === "category" ? "bg-green-600" : "bg-gray-400"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded text-white ${
            sortBy === "grouped" ? "bg-green-600" : "bg-gray-400"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Render View */}
      {sortBy === "grouped" ? (
        <div>
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category} className="mb-4">
                <h2 className="text-xl font-semibold capitalize mb-2 text-gray-800">
                  {category}
                </h2>
                <ul>
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
