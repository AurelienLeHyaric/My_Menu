// src/components/Navbar/Navbar.js
import React from "react"
import "./Navbar.scss"

function Navbar() {
   return (
      <nav className="navbar">
         <ul>
            <li>
               <a href="#section2">Exemples</a>
            </li>
            <li>
               <a href="#section3">Tarifs</a>
            </li>
            <li>
               <a href="#section4">Se connecter</a>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
