import React from "react"
import "./OverlayPlat.scss"
import Button from "../Button/Button"

function PlatOverlay({ onClose }) {
   const handleOverlayClick = (e) => {
      if (e.target.className === "platoverlay") {
         onClose()
      }
   }

   return (
      <div className="platoverlay" onClick={handleOverlayClick}>
         <div className="overlay-content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p>Ajouter un plat</p>
            <p>Nom du plat</p>
            <input type="text" />
            <Button text={"Valider"} variant={"primary"} />
         </div>
      </div>
   )
}

export default PlatOverlay
