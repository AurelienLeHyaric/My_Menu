import React from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"

function ConfirmationOverlay({ onNext, onClose }) {
   return (
      <div className="overlay">
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

               <FontAwesomeIcon icon={faSpinner} spinPulse className="custom-animation faSpinner" />

               <Button text="Suivant" variant="primary" className="login-button" onClick={onNext} />
               <a href="#" className="help-link">
                  Besoin d’aide ?
               </a>
            </div>
         </div>
      </div>
   )
}

export default ConfirmationOverlay
