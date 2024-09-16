import React from "react"
import Button from "../../Button/Button"
import "./StepThree.scss"

function StepThree({ onExport }) {
   return (
      <div className="step-three">
         <div className="zone-title">
            <p className="number">3</p>
            <h2>Exportez & diffusez</h2>
         </div>
         <div className="boutons-export">
            <Button text={"Exporter en PDF"} onClick={() => onExport("pdf")} />
            <Button text={"Diffusez sur Deliveroo"} onClick={() => window.open("https://deliveroo.fr/fr/", "_blank")} />
            <Button text={"Partager sur Instagram"} onClick={() => window.open("https://www.instagram.com/", "_blank")} />
         </div>
      </div>
   )
}

export default StepThree
