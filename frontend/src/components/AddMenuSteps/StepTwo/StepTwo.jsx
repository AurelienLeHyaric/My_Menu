import React, { useState } from "react"
import Button from "../../Button/Button"

function StepTwo({ onCustomize }) {
   const [font, setFont] = useState("Arial")
   const [color, setColor] = useState("#000000")

   const handleCustomize = () => {
      onCustomize({ font, color })
   }

   return (
      <div className="step-two">
         <div className="title">
            <p className="number">2</p>
            <h2>Personnalisez votre menu</h2>
         </div>
         <div className="customization-options">
            <label>
               Choisissez une police:
               <select value={font} onChange={(e) => setFont(e.target.value)}>
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier">Courier</option>
               </select>
            </label>
            <label>
               Choisissez une couleur:
               <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
         </div>
         <Button text={"Valider"} onClick={handleCustomize} />
      </div>
   )
}

export default StepTwo
