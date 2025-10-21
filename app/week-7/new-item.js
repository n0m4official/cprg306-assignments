"use client";

import { useState } from "react";

export default function NewItem() {
  // Initialize state variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Increment function (max 20)
  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  // Decrement function (min 1)
  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const item = {
      name,
      quantity,
      category,
    };

    console.log("Submitted item:", item);

    alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-6 w-80 flex flex-col items-stretch space-y-4 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Add New Item
      </h2>

      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium text-gray-700 mb-1">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="text-gray-500 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Quantity Section */}
      <div className="flex flex-col items-center">
        <label className="font-medium text-gray-700 mb-1">Quantity:</label>
        <div className="flex items-center space-x-4">
          {/* Decrement button */}
          <button
            type="button"
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
          <span className="text-xl font-bold text-gray-700">{quantity}</span>

          {/* Increment button */}
          <button
            type="button"
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
        <p className="text-gray-500 text-xs mt-1">
          Quantity must be between 1 and 20.
        </p>
      </div>

      {/* Category Field */}
      <div className="flex flex-col">
        <label htmlFor="category" className="font-medium text-gray-700 mb-1">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-gray-500 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Add Item
      </button>
    </form>
  );
}
