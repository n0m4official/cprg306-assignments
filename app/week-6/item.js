import React from "react";

// Component to display a single shopping list item
function Item({ name, quantity, category }) {
  return (
    <li className="p-4 mb-2 bg-gray-100 rounded shadow flex flex-col gap-1">
      {/* Item name */}
      <span className="font-semibold text-lg text-gray-900">{name}</span>

      {/* Quantity */}
      <span className="text-gray-700">Quantity: {quantity}</span>

      {/* Category */}
      <span className="text-sm text-blue-600">Category: {category}</span>
    </li>
  );
}

export default Item;
