import React from "react";

// PUBLIC_INTERFACE
/**
 * FoodCard for displaying a food item in list.
 * @param {{food: Object, restaurantName: string, onClick: Function}}
 */
export default function FoodCard({ food, restaurantName, onClick }) {
  return (
    <div className="food-card" tabIndex={0} role="button" onClick={onClick} aria-label={`View details of ${food.name}`}>
      <img src={food.image} alt={food.name} />
      <div className="card-category">{food.category}</div>
      <h3>{food.name}</h3>
      <div className="card-description">{food.description}</div>
      <div className="card-restaurant">{restaurantName}</div>
      <div className="food-price">${food.price.toFixed(2)}</div>
    </div>
  );
}
