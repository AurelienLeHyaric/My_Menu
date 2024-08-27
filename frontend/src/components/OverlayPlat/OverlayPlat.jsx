import React, { useState } from "react"
import "./OverlayPlat.scss"
import Button from "../Button/Button"

function PlatOverlay({ onClose }) {
   const [platName, setPlatName] = useState("")
   const [platPrice, setPlatPrice] = useState("")
   const [platDescription, setPlatDescription] = useState("")

   const handleOverlayClick = (e) => {
      if (e.target.className === "platoverlay") {
         onClose()
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      // Vérifie si le bouton est actif avant de soumettre
      if (platName.trim() && platPrice.trim() && platDescription.trim()) {
         console.log("Form submitted:", {
            name: platName,
            price: platPrice,
            description: platDescription,
         })
         onClose() // Ferme l'overlay après la soumission
      } else {
         console.log("Form not submitted: one or several champs is empty.")
      }
   }

   return (
      <div className="platoverlay" onClick={handleOverlayClick}>
         <div className="content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p>Ajoutez vos :</p>
            <form onSubmit={handleSubmit}>
               <p className="plat">Plat 1</p>
               <p className="plat-name">Nom du plat</p>
               <input type="text" value={platName} onChange={(e) => setPlatName(e.target.value)} />
               <p className="plat-price">Prix</p>
               <input type="text" value={platPrice} onChange={(e) => setPlatPrice(e.target.value)} />
               <p className="plat-description">Description</p>
               <input type="text" value={platDescription} onChange={(e) => setPlatDescription(e.target.value)} />
               <Button
                  text={"Valider"}
                  variant={platName.trim() && platPrice.trim() && platDescription.trim() ? "primary" : "inactive"}
                  disabled={!(platName.trim() && platPrice.trim() && platDescription.trim())}
               />
            </form>
         </div>
      </div>
   )
}

export default PlatOverlay
