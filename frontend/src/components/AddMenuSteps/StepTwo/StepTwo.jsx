import React, { useState, useEffect } from "react"
import "./StepTwo.scss"

function StepTwo({ onCustomize, currentFont, currentColor }) {
   const [font, setFont] = useState(currentFont)
   const [color, setColor] = useState(currentColor)

   useEffect(() => {
      onCustomize({ font, color })
   }, [font, color, onCustomize])

   return (
      <div className="step-two">
         <div className="zone-title">
            <p className="number">2</p>
            <h2>Personnalisez votre menu</h2>
         </div>
         <div className="custom-options">
            <div className="police">
               <p>Choisissez une typographie:</p>
               <div className="font-options">
                  <div className={`font-box ${font === "Georgia" ? "selected" : ""}`} onClick={() => setFont("Georgia")} style={{ fontFamily: "Georgia" }}>
                     Aa
                  </div>
                  <div className={`font-box ${font === "Verdana" ? "selected" : ""}`} onClick={() => setFont("Verdana")} style={{ fontFamily: "Verdana" }}>
                     Aa
                  </div>
                  <div className={`font-box ${font === "Courier New" ? "selected" : ""}`} onClick={() => setFont("Courier New")} style={{ fontFamily: "Courier New" }}>
                     Aa
                  </div>
               </div>
            </div>
            <label className="color">
               <p>Choisissez une couleur:</p>
               <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
         </div>
      </div>
   )
}

export default StepTwo
