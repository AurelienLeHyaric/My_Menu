import React from "react"
import Button from "../../Button/Button"
import "./StepThree.scss"

function StepThree({ onExport }) {
   return (
      <div className="step-three">
         <div className="zone-title">
            <p className="number">3</p>
            <h2>Exportez & diffusez votre menu</h2>
         </div>
         <div className="boutons-export">
            <Button text={"Exporter en PDF"} onClick={() => onExport("pdf")} />
            <Button text={"Diffusez sur Deliveroo"} onClick={() => onExport("deliveroo")} />
            <Button text={"Partager sur Instagram"} onClick={() => onExport("instagram")} />
         </div>
      </div>
   )
}

export default StepThree
