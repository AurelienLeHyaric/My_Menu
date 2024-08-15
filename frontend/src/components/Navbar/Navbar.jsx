import React from "react"
import "./Navbar.scss"

function Navbar({ onOpenOverlay }) {
   return (
      <nav className="navbar">
         <div className="navbar-logo">My Menu</div>
         <ul className="navbar-links">
            <li>
               <a href="#examples">Exemples</a>
            </li>
            <li>
               <a href="#pricing">Tarifs</a>
            </li>
            <li>
               <a
                  href="#"
                  onClick={(e) => {
                     e.preventDefault()
                     onOpenOverlay()
                  }}
                  className="login-link"
               >
                  Se connecter
               </a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
