import React, { useState } from "react"
import "./OverlayPlat.scss"
import Button from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

function PlatOverlay({ onClose }) {
   const [platName, setPlatName] = useState("")
   const [platPrice, setPlatPrice] = useState("")
   const [platDescription, setPlatDescription] = useState("")
   const [platImage, setPlatImage] = useState(null)

   const handleOverlayClick = (e) => {
      if (e.target.className === "platoverlay") {
         onClose()
         if (platImage) {
            URL.revokeObjectURL(platImage)
         }
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (platName.trim() && platPrice.trim() && platDescription.trim()) {
         console.log("Form submitted:", {
            name: platName,
            price: platPrice,
            description: platDescription,
            image: platImage,
         })
         onClose()
         if (platImage) {
            URL.revokeObjectURL(platImage)
         }
      } else {
         console.log("Form not submitted: some fields are empty.")
      }
   }

   const handleImageChange = (e) => {
      const file = e.target.files[0]
      if (file && file.size <= 2 * 1024 * 1024) {
         if (platImage) {
            URL.revokeObjectURL(platImage)
         }
         setPlatImage(URL.createObjectURL(file))
      } else {
         alert("Le fichier doit être inférieur à 2 Mo.")
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
               <div className="image-upload">
                  <label htmlFor="file-input">
                     {platImage ? (
                        <img src={platImage} alt="Aperçu" className="preview-image" />
                     ) : (
                        <>
                           <FontAwesomeIcon icon={faImage} className="icon-camera" />
                           <span>+ Ajouter photo</span>
                           <p className="file-size-info">max 2 mo</p>
                        </>
                     )}
                  </label>
                  <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
               </div>
               <div className="input-row">
                  <div className="input-group plat-group">
                     <p className="plat-name">Nom du plat</p>
                     <input type="text" value={platName} onChange={(e) => setPlatName(e.target.value)} />
                  </div>
                  <div className="input-group price-group">
                     <p className="plat-price">Prix</p>
                     <input type="number" value={platPrice} onChange={(e) => setPlatPrice(e.target.value)} />
                  </div>
               </div>
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
