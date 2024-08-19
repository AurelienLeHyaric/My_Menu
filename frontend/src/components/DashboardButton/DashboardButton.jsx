import React from "react"
import "./DashboardButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function DashboardButton({ text, icon, onClick }) {
   return (
      <button className="dashbutton" onClick={onClick}>
         <span className="text">{text}</span>
         {icon && <FontAwesomeIcon icon={icon} className="icone" />}
      </button>
   )
}

export default DashboardButton
