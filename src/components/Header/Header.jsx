// 📦 Imports
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState, useContext } from "react";
import { DataContext } from "../../context/Datacontext";


// ======= Header Component ==========
export default function Header() {
  
  const { watches } = useContext(DataContext);
  const [search, setSearch] = useState(""); // Search text
  const [filteredResults, setFilteredResults] = useState([]); // store filtered products
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const cartCount = JSON.parse(localStorage.getItem("cartItems"))?.length || 0;

  // ======= Logout ==========
  const logOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // ======= Handle Input Change ==========
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // ======= Handle Submit ==========
  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = watches.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResults(filtered); // ✅ save results
    setSearch(""); // Clear the input
  };

  return (
    <>
      <header className="header">
        {/* Left: Logo + Navigation */}
        <div className="logo-link-container">
          <div className="logo">
            {user ? `Hi, ${user.name}` : "Muhammad Umar"}
          </div>

          <nav className="nav-links">
            <NavLink to="/" end>
              <li>Home</li>
            </NavLink>
            <NavLink to="/About">
              <li>About</li>
            </NavLink>
            <NavLink to="/Contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/Clock">
              <li>Clock</li>
            </NavLink>
          </nav>
        </div>

        {/* Right: Search + Cart + Logout */}
        <div className="right-section">
          <form className="search-box" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleChange}
            />
          </form>

          <div className="cart-container">
            <NavLink to={"/Cart"}>
            <img
              src="../src/assets/images/cart-icon.png"
              alt="Cart"
              className="cart-icon-image"
            />
            </NavLink>

            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>

          <Button className="button-logout" onClick={logOut}>
            Log out
          </Button>
        </div>
      </header>

      {/* ✅ Show Search Results */}
    </>
  );
}
