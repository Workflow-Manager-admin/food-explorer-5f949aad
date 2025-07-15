import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import FoodDetailModal from "./components/FoodDetailModal";

/* Demo/mock data for food and restaurants */
const categories = ["All", "Pizza", "Burger", "Sushi", "Salad", "Dessert"];
const restaurants = [
  { id: 1, name: "Urban Eats" },
  { id: 2, name: "Green Bowl" },
  { id: 3, name: "Sushi Train" },
];
const foodItems = [
  // Note: In real app, this would come from an API/server.
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with mozzarella, tomato, and basil.",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
    restaurantId: 1,
    price: 12,
  },
  {
    id: 2,
    name: "Vegan Burger",
    description: "Plant-based patty, avocado, lettuce, vegan mayo.",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    restaurantId: 2,
    price: 10,
  },
  {
    id: 3,
    name: "Salmon Sushi",
    description: "Fresh salmon with seasoned rice and nori.",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    restaurantId: 3,
    price: 16,
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crispy lettuce, parmesan, croutons, Caesar dressing.",
    category: "Salad",
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    restaurantId: 2,
    price: 9,
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm, gooey-centered chocolate cake.",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&w=400&q=80",
    restaurantId: 1,
    price: 7,
  },
  // more food items for demo
  {
    id: 6,
    name: "Pepperoni Pizza",
    description: "Loaded with crispy pepperoni and cheese.",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1548365328-8418ca0c2d91?auto=format&fit=crop&w=400&q=80",
    restaurantId: 1,
    price: 13,
  },
  {
    id: 7,
    name: "Green Goddess Salad",
    description: "Fresh greens, cucumber, avocado, and zesty dressing.",
    category: "Salad",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    restaurantId: 2,
    price: 10,
  },
  {
    id: 8,
    name: "Dragon Roll",
    description: "A sushi roll with eel, cucumber, and creamy avocado.",
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    restaurantId: 3,
    price: 18,
  },
];

function getRestaurantName(id) {
  const res = restaurants.find((r) => r.id === id);
  return res ? res.name : "";
}

// PUBLIC_INTERFACE
function App() {
  // State
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRestaurant, setSelectedRestaurant] = useState("All");
  const [modalFood, setModalFood] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Derived filtered foods
  const filteredFoods = foodItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesRestaurant =
      selectedRestaurant === "All" ||
      getRestaurantName(item.restaurantId) === selectedRestaurant;
    return matchesSearch && matchesCategory && matchesRestaurant;
  });

  // Sidebar toggler for mobile
  function handleSidebarToggle() {
    setSidebarOpen((prev) => !prev);
  }

  // PUBLIC_INTERFACE
  return (
    <div className="food-explorer-root">
      <Header
        search={search}
        setSearch={setSearch}
        onSidebarToggle={handleSidebarToggle}
      />
      <div className="layout">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main>
          <FoodList
            foodItems={filteredFoods}
            onFoodClick={setModalFood}
            getRestaurantName={getRestaurantName}
          />
        </main>
      </div>
      <FoodDetailModal
        food={modalFood}
        onClose={() => setModalFood(null)}
        getRestaurantName={getRestaurantName}
      />
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Sidebar"
        />
      )}
      <footer className="footer-info">
        <span>
          &copy; {new Date().getFullYear()} Food Explorer · React Minimal Frontend
        </span>
      </footer>
    </div>
  );
}

export default App;
