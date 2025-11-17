import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="p-4 mb-2 bg-gray-100 rounded shadow flex flex-col gap-1 cursor-pointer hover:bg-gray-200 transition"
    >
      <span className="font-semibold text-lg text-gray-900">{name}</span>
      <span className="text-gray-700">Quantity: {quantity}</span>
      <span className="text-sm text-blue-600">Category: {category}</span>
    </li>
  );
}
