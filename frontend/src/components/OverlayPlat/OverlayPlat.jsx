import React, { useState } from "react"
import "./OverlayPlat.scss"
import Button from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

function PlatOverlay({ onClose, onAddPlat, categoryName }) {
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
      if (platName.trim() && platPrice.trim()) {
         const newPlat = {
            name: platName,
            price: platPrice,
            description: platDescription,
            image: platImage,
         }
         onAddPlat(newPlat) // Envoyer le plat complet
         setPlatName("")
         setPlatPrice("")
         setPlatDescription("")
         if (platImage) {
            URL.revokeObjectURL(platImage)
            setPlatImage(null)
         }
         onClose()
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
            <p>Ajoutez un plat à '{categoryName}' :</p>
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
                  <InputField label="Nom du plat" type="text" value={platName} onChange={setPlatName} className="plat-group" />
                  <InputField label="Prix" type="number" value={platPrice} onChange={setPlatPrice} className="price-group" />
               </div>
               <InputField label="Description (optionnel)" type="text" value={platDescription} onChange={setPlatDescription} className="plat-description" />
               <Button
                  text={"Valider"}
                  variant={platName.trim() && platPrice.trim() ? "primary" : "inactive"} // Activer le bouton seulement si les deux champs sont remplis
                  disabled={!platName.trim() || !platPrice.trim()} // Désactiver le bouton si l'un des champs est vide
               />
            </form>
         </div>
      </div>
   )
}

const InputField = ({ label, type, value, onChange, className }) => (
   <div className={`input-group ${className}`}>
      <p>{label}</p>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
   </div>
)

export default PlatOverlay
