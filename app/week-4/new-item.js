"use client";

import { useState } from "react";

export default function NewItem() {
  // Initialize state variable
  const [quantity, setQuantity] = useState(1);

  // Increment function (max 20)
  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  // Decrement function (min 1)
  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Select Quantity</h2>

      <div className="flex items-center space-x-4">
        {/* Decrement button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-2 rounded-lg font-bold text-white transition ${
            quantity === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>

        {/* Quantity display */}
        <span className="text-2xl font-bold text-gray-700">{quantity}</span>

        {/* Increment button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-2 rounded-lg font-bold text-white transition ${
            quantity === 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>

      <p className="text-gray-500 text-sm">
        Quantity must be between 1 and 20.
      </p>
    </div>
  );
}
