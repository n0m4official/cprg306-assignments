"use client";

import { useEffect, useState } from "react";

// Fetch function outside the component
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  // Load whenever ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full md:w-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient ? (
        <p className="text-gray-500 text-center">
          Select an item to see meal ideas.
        </p>
      ) : meals.length === 0 ? (
        <p className="text-gray-500 text-center">No meals found.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border rounded-lg p-2 flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-24 h-24 object-cover rounded"
              />
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {meal.strMeal}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
