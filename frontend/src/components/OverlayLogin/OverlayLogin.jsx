import React from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"

function LoginOverlay({ onNext, onClose }) {
   return (
      <div className="overlay">
         <div className="overlay-content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <div className="icon-container">
               <FontAwesomeIcon icon={faUserTie} shake className="custom-animation faUserTie" />
            </div>
            <div className="connexion">
               <h2>Connexion</h2>
               <p>
                  Connectez-vous grâce à <br /> votre adresse e-mail
               </p>
               <form>
                  <label htmlFor="email">Adresse e-mail</label>
                  <input type="email" id="email" placeholder="Entrez votre adresse e-mail" />
                  <Button text="Se connecter" variant="primary" className="login-button" onClick={onNext} />
               </form>
               <a href="#" className="help-link">
                  Besoin d’aide ?
               </a>
            </div>
         </div>
      </div>
   )
}

export default LoginOverlay
