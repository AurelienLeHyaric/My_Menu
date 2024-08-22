import React from "react"
import "./AddMenuPage.scss"
import Button from "../components/Button/Button"

function AddMenu() {
   return (
      <div className="addmenupage">
         <div className="main">
            <h1>Créer un menu</h1>
            <p>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
            <div className="create-section">
               <div className="partone">one</div>
               <div className="parttwo">two</div>
               <div className="partthree">three</div>
            </div>
            <Button text={"Étape suivante"} variant={"inactive"} />
         </div>
         <div className="preview">
            <div className="previewmenu"></div>
         </div>
      </div>
   )
}

export default AddMenu
