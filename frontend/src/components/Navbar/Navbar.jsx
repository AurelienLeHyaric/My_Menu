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
               <button
                  className="login-link"
                  onClick={(e) => {
                     e.preventDefault()
                     onOpenOverlay()
                  }}
               >
                  Se connecter
               </button>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
