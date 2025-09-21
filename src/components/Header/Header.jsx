//css 
import "./Header.css"

//NavLink 
import  {NavLink} from "react-router-dom"

// components
import  Button from "../Button/Button"


export default function Header (){
    return  (
        <>

           <header className="header">
        <div className="logo-link-container">
          <div className="logo">Digital Watch</div>
          <nav className="nav-links">
            <NavLink to={"/"}><li>Home</li></NavLink>
            <NavLink to={"/About"}><li>About</li></NavLink>
            <NavLink to={"/Contact"}><li>Contact</li></NavLink>
            <NavLink to={"/Clock"}><li>Clock</li></NavLink>
         
          </nav>
        </div>

        <div className="search-box-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <Button className="button-logout">Log out</Button>
          </div>
        </div>
      </header>
        
        </>
    )
}
