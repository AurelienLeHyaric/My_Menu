import React from "react"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "../../utils/constants"
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
               <Link
                  to={APP_ROUTES.SIGN_IN}
                  className="login-link"
                  onClick={(e) => {
                     e.preventDefault()
                     onOpenOverlay()
                  }}
               >
                  Se connecter
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navbar
