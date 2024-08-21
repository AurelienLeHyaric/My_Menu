import React from "react"
import { NavLink } from "react-router-dom"
import "./DashboardMenu.scss"

function Menu() {
   return (
      <div className="menu">
         <h2>My Menu</h2>

         <div className="menu-sections">
            <ul>
               <li>
                  <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? "active-link" : "")}>
                     Dashboard
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/dashboard/mesmenus" className={({ isActive }) => (isActive ? "active-link" : "")}>
                     Mes menus
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/dashboard/moncompte" className={({ isActive }) => (isActive ? "active-link" : "")}>
                     Mon compte
                  </NavLink>
               </li>
            </ul>
         </div>
         <div className="menu-separation">_______</div>
         <div className="menu-sections2">
            <ul>
               <li>
                  <NavLink to="/dashboard/moncompte">Se déconnecter</NavLink>
               </li>
               <li>
                  <NavLink to="/dashboard/moncompte">Mentions légales</NavLink>
               </li>
               <li>
                  <NavLink to="/dashboard/moncompte">Tous droits réservés</NavLink>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Menu
