import React from "react"
import "./OverlayCategory.scss"
import Button from "../Button/Button"

function CategoryOverlay({ onClose }) {
   const handleOverlayClick = (e) => {
      if (e.target.className === "categoryoverlay") {
         onClose()
      }
   }
   return (
      <div className="categoryoverlay" onClick={handleOverlayClick}>
         <div className="overlay-content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p>Ajouter une catégorie</p>
            <p>Nom de la catégorie</p>
            <input type="text" />
            <Button text={"Valider"} variant={"primary"} />
         </div>
      </div>
   )
}

export default CategoryOverlay
