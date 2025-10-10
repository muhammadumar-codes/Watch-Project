//css
import "./Header.css";

// cart page


//NavLink
import { NavLink, useNavigate } from "react-router-dom";

// components
import Button from "../Button/Button";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };


  return (
    <>
      <header className="header">
        <div className="logo-link-container">
          <div className="logo">{user?.name}</div>
          <nav className="nav-links">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/About"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/Contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink to={"/Clock"}>
              <li>Clock</li>
            </NavLink>
          </nav>
        </div>

        <div className="search-box-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            {/* navigate  it to shoping  cart  */}
            
            <NavLink to={"/cart"}>
            <img src="../src/assets/images/cart-icon.png" alt="" />
            </NavLink>
            <Button className="button-logout" onClick={logOut}>
              Log out
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
