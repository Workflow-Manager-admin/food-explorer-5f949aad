import React from "react";

// PUBLIC_INTERFACE
/**
 * Header with logo/title, search bar, and mobile menu toggle.
 * @param {{search: string, setSearch: Function, onSidebarToggle: Function}}
 */
export default function Header({ search, setSearch, onSidebarToggle }) {
  return (
    <header className="header">
      <button
        className="menu-btn"
        onClick={onSidebarToggle}
        aria-label="Open Sidebar"
      >
        <span role="img" aria-label="menu">&#9776;</span>
      </button>
      <span className="header-title">
        <span style={{ color: "var(--primary)" }}>🍴 Food Explorer</span>
      </span>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search food or description..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search food"
        />
      </div>
      <div style={{ minWidth: 30, flexShrink: 0 }} />
    </header>
  );
}
