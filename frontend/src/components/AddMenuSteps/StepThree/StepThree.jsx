import React from "react"
import Button from "../../Button/Button"

function StepThree({ onExport }) {
   return (
      <div className="step-three">
         <div className="title">
            <p className="number">3</p>
            <h2>Exportez & diffusez votre menu</h2>
         </div>
         <Button text={"Export PDF"} onClick={() => onExport("pdf")} />
         <Button text={"Export Deliveroo"} onClick={() => onExport("deliveroo")} />
         <Button text={"Export Instagram"} onClick={() => onExport("instagram")} />
      </div>
   )
}

export default StepThree
