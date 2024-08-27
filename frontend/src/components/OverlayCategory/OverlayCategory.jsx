import React, { useState } from "react"
import "./OverlayCategory.scss"
import Button from "../Button/Button"

function CategoryOverlay({ onClose }) {
   const [categoryName, setCategoryName] = useState("")

   const handleOverlayClick = (e) => {
      if (e.target.className === "categoryoverlay") {
         onClose()
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      // Vérifie si le bouton est actif avant de soumettre
      if (categoryName.trim()) {
         console.log("Form submitted:", categoryName)
         onClose() // Ferme l'overlay après la soumission
      } else {
         console.log("Form not submitted: category name is empty.")
      }
   }

   return (
      <div className="categoryoverlay" onClick={handleOverlayClick}>
         <div className="content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p className="category-title">Ajouter une catégorie</p>
            <form onSubmit={handleSubmit}>
               <p className="category-name">Nom de la catégorie</p>
               <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
               <Button text={"Valider"} variant={categoryName.trim() ? "primary" : "inactive"} disabled={!categoryName.trim()} />
            </form>
         </div>
      </div>
   )
}

export default CategoryOverlay
