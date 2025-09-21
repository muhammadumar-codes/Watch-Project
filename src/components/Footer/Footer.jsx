import "./Footer.css"

import  {NavLink} from  "react-router-dom"


export default function Footer (){
    return  (
        <>
        
          <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About Digital Clock</h3>
            <p>
             Our watch app helps You manage time smarter-tracks,origanze and optimize every secound of your with ease
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul classNameName="nav-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
             
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: muhammadumar.codes@gmail.com</p>
            <p>Phone: +92 3010568885</p>
            <p>Address: Peshawar, Pakistan</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 MyCollege. All Rights Reserved.</p>
        </div>
      </footer>
        </>
    )
}