import React, { useState } from "react"
import "./AddMenuPage.scss"
import Button from "../components/Button/Button"
import PlatOverlay from "../components/OverlayPlat/OverlayPlat"
import CategoryOverlay from "../components/OverlayCategory/OverlayCategory"

function AddMenu() {
   const [isCategoryOverlayOpen, setCategoryOverlayOpen] = useState(false)
   const [isPlatOverlayOpen, setPlatOverlayOpen] = useState(false)

   const handleOpenCategoryOverlay = () => {
      setCategoryOverlayOpen(true)
   }

   const handleCloseCategoryOverlay = () => {
      setCategoryOverlayOpen(false)
   }

   const handleOpenPlatOverlay = () => {
      setPlatOverlayOpen(true)
   }

   const handleClosePlatOverlay = () => {
      setPlatOverlayOpen(false)
   }

   return (
      <div className="addmenupage">
         <div className="main">
            <h1>Créer un menu</h1>
            <p>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
            <div className="create-section">
               <div className="part-one">
                  <h2>Ajoutez vos plats</h2>
                  <button onClick={handleOpenCategoryOverlay}>+ Catégorie (ex : entrées, plats...)</button>
                  <button onClick={handleOpenPlatOverlay}>+ Plats (ex. : pâtes, gyros, coca...)</button>
               </div>
               <div className="part-two">
                  <h2>Personnalisez votre menu</h2>
               </div>
               <div className="part-three">
                  <h2>Exportez & diffusez votre menu</h2>
               </div>
            </div>
            <Button text={"Étape suivante"} variant={"inactive"} />
         </div>
         <div className="preview">
            <div className="previewmenu"></div>
         </div>

         {/* Afficher CategoryOverlay si isCategoryOverlayOpen est vrai */}
         {isCategoryOverlayOpen && <CategoryOverlay onClose={handleCloseCategoryOverlay} />}

         {/* Afficher PlatOverlay si isPlatOverlayOpen est vrai */}
         {isPlatOverlayOpen && <PlatOverlay onClose={handleClosePlatOverlay} />}
      </div>
   )
}

export default AddMenu
