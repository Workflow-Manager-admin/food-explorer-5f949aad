import React from "react";

// PUBLIC_INTERFACE
/**
 * Sidebar with food categories and restaurant filter.
 * @param {{categories: string[], selectedCategory: string, setSelectedCategory: Function, restaurants: Array, selectedRestaurant: string, setSelectedRestaurant: Function, open?: boolean, onClose?: Function}}
 */
export default function Sidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  restaurants,
  selectedRestaurant,
  setSelectedRestaurant,
  open = false,
  onClose,
}) {
  return (
    <>
      <aside
        className={`sidebar${open ? " open" : ""}`}
        aria-label="Sidebar"
        tabIndex={-1}
        style={{ minWidth: 0 }}
      >
        <div>
          <div className="section-label">Category</div>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={cat === selectedCategory ? "active" : ""}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (onClose) onClose();
                  }}
                  aria-current={cat === selectedCategory}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          <div className="section-label" style={{ marginTop: "1.8rem" }}>
            Restaurants
          </div>
          <ul>
            <li>
              <button
                className={selectedRestaurant === "All" ? "active" : ""}
                onClick={() => {
                  setSelectedRestaurant("All");
                  if (onClose) onClose();
                }}
                aria-current={selectedRestaurant === "All"}
              >
                All
              </button>
            </li>
            {restaurants.map((r) => (
              <li key={r.id}>
                <button
                  className={r.name === selectedRestaurant ? "active restaurant-btn" : "restaurant-btn"}
                  onClick={() => {
                    setSelectedRestaurant(r.name);
                    if (onClose) onClose();
                  }}
                  aria-current={r.name === selectedRestaurant}
                >
                  {r.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
