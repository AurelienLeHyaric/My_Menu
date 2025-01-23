import React, { useState } from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"
import axios from "axios"
import { API_ROUTES } from "../../utils/constants"

function LoginOverlay({ onNext, onClose }) {
   const [email, setEmail] = useState("")
   const [errorMessage, setErrorMessage] = useState("")
   const [successMessage, setSuccessMessage] = useState("")

   const handleSubmit = async (e) => {
      e.preventDefault()
      console.log("Email soumis :", email) // Vérifie que l'e-mail est bien récupéré
      try {
         const response = await axios.post(API_ROUTES.SEND_MAGIC_LINK, { email })
         if (response.status === 200) {
            setSuccessMessage("Un lien de connexion vous a été envoyé par e-mail.")
            onNext() // Passe à l'étape suivante après envoi réussi
         }
      } catch (error) {
         setErrorMessage("Une erreur est survenue. Veuillez réessayer.")
      }
   }

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
               <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Adresse e-mail</label>
                  <input type="email" id="email" placeholder="Entrez votre adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Button text="Se connecter" variant="primary" className="login-button" type="submit" />
               </form>
               {errorMessage && <p className="error">{errorMessage}</p>}
               {successMessage && <p className="success">{successMessage}</p>}
               <a href="#" className="help-link">
                  Besoin d’aide ?
               </a>
            </div>
         </div>
      </div>
   )
}

export default LoginOverlay
