import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import Button from "../../Button/Button"

function StepOne({ categories, plats, onAddCategory, onAddPlat, onDeleteCategory, onDeletePlat, onOpenPlatForm }) {
   return (
      <div className="step-one">
         <div className="title">
            <p className="number">1</p>
            <h2>Ajoutez vos plats</h2>
         </div>
         <div id="addbutton">
            {categories.map((category, index) => (
               <div key={index}>
                  <p>
                     {category}
                     <FontAwesomeIcon icon={faPenToSquare} />
                     <FontAwesomeIcon icon={faTrashCan} onClick={() => onDeleteCategory(category)} />
                  </p>
                  {plats[category] && (
                     <ul>
                        {plats[category].map((plat, platIndex) => (
                           <li key={platIndex}>
                              {plat}
                              <FontAwesomeIcon icon={faPenToSquare} />
                              <FontAwesomeIcon icon={faTrashCan} onClick={() => onDeletePlat(category, plat)} />
                           </li>
                        ))}
                     </ul>
                  )}
                  <button onClick={() => onOpenPlatForm(category)}>+ Ajouter un plat aux {category}</button>
               </div>
            ))}
            <Button text={"+ Catégorie"} onClick={onAddCategory} />
         </div>
      </div>
   )
}

export default StepOne
