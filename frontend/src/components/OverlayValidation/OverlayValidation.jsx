// ValidationOverlay.jsx
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { API_ROUTES } from "../../utils/constants"
import "../../styles/overlayConnexion.scss"

function ValidationOverlay({ token, onClose }) {
   const navigate = useNavigate()
   const [validationMessage, setValidationMessage] = useState("")

   useEffect(() => {
      // Si aucun token n'est détecté, on ferme immédiatement l'overlay
      if (!token) {
         onClose()
         return
      }

      const validateToken = async () => {
         try {
            // Appel à l'endpoint de validation en passant le token en query string
            const response = await fetch(`${API_ROUTES.VALIDATE_LOGIN}?token=${token}`, {
               method: "GET",
               credentials: "include", // Pour envoyer/recevoir le cookie
               headers: {
                  "Content-Type": "application/json",
               },
            })
            const data = await response.json()

            if (response.ok) {
               setValidationMessage("Connexion réussie !")
               localStorage.setItem("authToken", data.userId)
               // Redirection vers le dashboard après quelques instants
               setTimeout(() => {
                  navigate("/dashboard")
               }, 1500)
            } else {
               setValidationMessage("Le lien est invalide ou expiré.")
            }
         } catch (error) {
            console.error("Erreur lors de la validation du token :", error)
            setValidationMessage("Le lien est invalide ou expiré.")
         }
      }

      validateToken()
   }, [token, navigate, onClose])

   return (
      <div className="overlay-content">
         <button className="close-button" onClick={onClose}>
            &times;
         </button>
         <div className="icon-container">
            <div className="icon-placeholder">
               <FontAwesomeIcon icon={faCircleCheck} beat className="custom-animation faCircleCheck" />
            </div>
         </div>
         <p>{validationMessage}</p>
      </div>
   )
}

export default ValidationOverlay
