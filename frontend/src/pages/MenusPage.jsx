import React from "react"
import { useNavigate } from "react-router-dom"
import "./MenusPage.scss"
import Button from "../components/Button/Button"
import menuImage from "../assets/images/menu.webp"

function MesMenus() {
   const navigate = useNavigate()

   const handleAddMenuClick = () => {
      navigate("/dashboard/mesmenus/addmenu")
   }
   return (
      <div className="menuspage">
         <h1>Mes Menus</h1>
         <div className="menuzone">
            <div className="menus">
               <article>
                  <img src={menuImage} alt="Menu" />
                  <p>Crée le </p>
                  <Button text="Modifier" variant="primary" />
                  <a href="">Supprimer</a>
               </article>
            </div>
            <button className="addmenu" onClick={handleAddMenuClick}>
               Ajouter un menu
            </button>
         </div>
      </div>
   )
}

export default MesMenus
