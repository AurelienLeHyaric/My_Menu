// ConfirmationOverlay.jsx
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "../../styles/overlayConnexion.scss"

function ConfirmationOverlay({ onClose }) {
   return (
      <div className="overlay-content">
         <button className="close-button" onClick={onClose}>
            &times;
         </button>
         <div className="icon-container">
            <div className="icon-placeholder">
               <FontAwesomeIcon icon={faEnvelope} flip className="custom-animation faEnvelope" />
            </div>
         </div>
         <div className="confirmation">
            <h2>Confirmez votre e-mail</h2>
            <p>Un e-mail de confirmation a été envoyé à votre adresse.</p>
         </div>
      </div>
   )
}

export default ConfirmationOverlay
