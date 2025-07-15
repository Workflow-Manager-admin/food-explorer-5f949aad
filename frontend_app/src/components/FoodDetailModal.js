import React from "react";

// PUBLIC_INTERFACE
/**
 * FoodDetailModal a modal popup with detail about a food item.
 * @param {{food: Object|null, onClose: Function, getRestaurantName: Function}}
 */
export default function FoodDetailModal({ food, onClose, getRestaurantName }) {
  if (!food) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <section className="food-detail-modal">
        <button
          className="food-detail-close"
          onClick={onClose}
          aria-label="Close"
          autoFocus
        >
          &times;
        </button>
        <img className="food-detail-image" src={food.image} alt={food.name} />
        <div className="food-detail-content">
          <div>
            <div className="food-detail-title">{food.name}</div>
            <div className="food-detail-restaurant">
              {getRestaurantName(food.restaurantId)}
            </div>
          </div>
          <div className="food-detail-description">{food.description}</div>
          <div className="food-detail-price">${food.price.toFixed(2)}</div>
        </div>
      </section>
    </>
  );
}
