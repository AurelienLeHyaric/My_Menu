import React, { useEffect, useState } from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import { API_ROUTES } from "../../utils/constants"

function ValidationOverlay({ onClose }) {
   const navigate = useNavigate()
   const [searchParams] = useSearchParams()
   const token = "mocked-token" // Récupération du token dans l'URL
   const [validationMessage, setValidationMessage] = useState("")

   useEffect(() => {
      const validateToken = async () => {
         try {
            const response = await axios.post(API_ROUTES.VALIDATE_TOKEN, { token })
            console.log("Réponse de l'API de validation :", response)
            if (response.status === 200) {
               setValidationMessage("Connexion réussie !")
               // Stocke éventuellement le token ou l'état de l'utilisateur connecté
               localStorage.setItem("authToken", response.data.token)
               // Redirige vers le dashboard
               setTimeout(() => {
                  navigate("/dashboard")
               }, 1500) // Temporisation avant la redirection
            } else {
               setValidationMessage("Le lien est invalide ou expiré.")
            }
         } catch (error) {
            console.error("Erreur lors de la validation du token :", error)
            setValidationMessage("Le lien est invalide ou expiré.")
         }
      }

      if (token) {
         validateToken()
      } else {
         setValidationMessage("Aucun token trouvé dans l'URL.")
      }
   }, [token, navigate])

   return (
      <div className="overlay">
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
            {validationMessage === "Connexion réussie !" && (
               <button type="button" className="login-button" onClick={() => navigate("/dashboard")}>
                  OK
               </button>
            )}
         </div>
      </div>
   )
}

export default ValidationOverlay
