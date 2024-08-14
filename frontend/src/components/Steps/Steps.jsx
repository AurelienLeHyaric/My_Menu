// src/components/CreationSteps/CreationSteps.js
import React from "react"
import "./Steps.scss"

function CreationSteps() {
   return (
      <div className="creation-steps">
         <div className="step">
            <div className="step-number">1</div>
            <p>Listez l'ensemble de vos boissons, entrées, plats, desserts, et accompagnements à afficher sur votre menu.</p>
         </div>
         <div className="step">
            <div className="step-number">2</div>
            <p>Choisissez le style qui correspond à votre restaurant, incluant le logo, les couleurs, et la typographie.</p>
         </div>
         <div className="step">
            <div className="step-number">3</div>
            <p>Enregistrez votre menu en format PDF et diffusez-le sur vos plateformes de vente en ligne.</p>
         </div>
      </div>
   )
}

export default CreationSteps
