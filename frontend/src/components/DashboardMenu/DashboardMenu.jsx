import React from "react"
import { Link } from "react-router-dom"
import "./DashboardMenu.scss"

function Menu() {
   return (
      <div className="menu">
         <h2>My Menu</h2>

         <div className="menu-sections">
            <ul>
               <li>
                  <Link to="/dashboard">Dashboard</Link>
               </li>
               <li>
                  <Link to="/dashboard/mesmenus">Mes menus</Link>
               </li>
               <li>
                  <Link to="/dashboard/moncompte">Mon compte</Link>
               </li>
            </ul>
         </div>
         <div className="menu-separation">_______</div>
         <div className="menu-sections2">
            <ul>
               <li>
                  <Link to="/dashboard/moncompte">Se déconnecter</Link>
               </li>
               <li>
                  <Link to="/dashboard/moncompte">Mentions légales</Link>
               </li>
               <li>
                  <Link to="/dashboard/moncompte">Tous droits réservés</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Menu
