import React, { useState } from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button/Button"
import { API_ROUTES } from "../../utils/constants"

function LoginOverlay({ onNext, onClose }) {
   const [email, setEmail] = useState("")
   const [errorMessage, setErrorMessage] = useState("")
   const [successMessage, setSuccessMessage] = useState("")

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const response = await fetch(API_ROUTES.LOGIN, {
            method: "POST",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
         })

         if (response.status === 200) {
            setSuccessMessage("Un lien de connexion vous a été envoyé par e-mail.")
            onNext()
         }
      } catch (error) {
         console.error("Erreur lors de l'envoi du Magic Link :", error)
         setErrorMessage("Une erreur est survenue.")
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
            </div>
         </div>
      </div>
   )
}

export default LoginOverlay
