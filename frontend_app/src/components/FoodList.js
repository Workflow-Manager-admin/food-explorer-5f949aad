import React from "react";
import FoodCard from "./FoodCard";

// PUBLIC_INTERFACE
/**
 * FoodList displays a grid of food cards or a no data message.
 * @param {{foodItems: Array, onFoodClick: Function, getRestaurantName: Function}}
 */
export default function FoodList({ foodItems, onFoodClick, getRestaurantName }) {
  if (foodItems.length === 0) {
    return <div className="empty-list-message">No food found for your filters.</div>;
  }
  return (
    <div className="food-list" role="list">
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          food={item}
          onClick={() => onFoodClick(item)}
          restaurantName={getRestaurantName(item.restaurantId)}
        />
      ))}
    </div>
  );
}
