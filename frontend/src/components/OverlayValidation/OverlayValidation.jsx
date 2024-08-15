import React from "react"
import "../../styles/overlayConnexion.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

function ValidationOverlay({ onClose }) {
   const navigate = useNavigate()
   const handleNavigate = () => {
      navigate("/dashboard")
   }

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
            <button type="button" className="login-button" onClick={handleNavigate}>
               OK
            </button>
         </div>
      </div>
   )
}

export default ValidationOverlay
