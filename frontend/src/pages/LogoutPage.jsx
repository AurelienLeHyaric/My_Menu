// LogoutPage.jsx
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { API_ROUTES } from "../utils/constants"

function LogoutPage() {
   const navigate = useNavigate()

   useEffect(() => {
      const logout = async () => {
         try {
            await fetch(API_ROUTES.LOGOUT, {
               method: "POST",
               credentials: "include", // pour envoyer le cookie
            })
         } catch (error) {
            console.error("Erreur lors de la déconnexion :", error)
         }
         // Redirige vers la page d'accueil après la déconnexion
         navigate("/")
      }

      logout()
   }, [navigate])

   // Vous pouvez retourner null ou afficher un message de chargement
   return null
}

export default LogoutPage
