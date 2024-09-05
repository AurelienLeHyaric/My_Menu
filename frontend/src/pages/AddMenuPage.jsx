import React, { useState } from "react"
import "./AddMenuPage.scss"
import Button from "../components/Button/Button"
import PlatOverlay from "../components/OverlayPlat/OverlayPlat"
import CategoryOverlay from "../components/OverlayCategory/OverlayCategory"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

function AddMenu() {
   const [isCategoryOverlayOpen, setCategoryOverlayOpen] = useState(false)
   const [isPlatOverlayOpen, setPlatOverlayOpen] = useState(false)
   const [categories, setCategories] = useState([])
   const [plats, setPlats] = useState({}) // Objet pour stocker les plats par catégorie
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false) // État pour gérer l'ouverture de la pop-up de confirmation
   const [categoryToDelete, setCategoryToDelete] = useState(null) // État pour stocker la catégorie à supprimer
   const [isDeletePlatConfirmationOpen, setDeletePlatConfirmationOpen] = useState(false) // État pour gérer l'ouverture de la pop-up de confirmation de suppression d'un plat
   const [platToDelete, setPlatToDelete] = useState({ category: null, name: null }) // État pour stocker le plat à supprimer

   const handleOpenCategoryOverlay = () => {
      setCategoryOverlayOpen(true)
   }

   const handleCloseCategoryOverlay = () => {
      setCategoryOverlayOpen(false)
   }

   const handleOpenPlatOverlay = (category) => {
      setSelectedCategory(category)
      setPlatOverlayOpen(true)
   }

   const handleClosePlatOverlay = () => {
      setPlatOverlayOpen(false)
      setSelectedCategory(null) // Réinitialise la catégorie sélectionnée
   }

   const handleAddCategory = (newCategory) => {
      setCategories([...categories, newCategory])
      setCategoryOverlayOpen(false)
   }

   const handleAddPlat = (newPlat) => {
      setPlats((prevPlats) => ({
         ...prevPlats,
         [selectedCategory]: [...(prevPlats[selectedCategory] || []), newPlat.name],
      }))
      setPlatOverlayOpen(false)
   }

   const handleOpenDeleteConfirmation = (category) => {
      setCategoryToDelete(category) // Stocke la catégorie à supprimer
      setDeleteConfirmationOpen(true) // Ouvre la pop-up de confirmation
   }

   const handleConfirmDelete = () => {
      setCategories(categories.filter((category) => category !== categoryToDelete)) // Supprime la catégorie de la liste
      setPlats((prevPlats) => {
         const newPlats = { ...prevPlats }
         delete newPlats[categoryToDelete] // Supprime les plats associés à la catégorie
         return newPlats
      })
      setDeleteConfirmationOpen(false) // Ferme la pop-up de confirmation
      setCategoryToDelete(null) // Réinitialise la catégorie à supprimer
   }

   const handleCancelDelete = () => {
      setDeleteConfirmationOpen(false) // Ferme la pop-up de confirmation sans rien faire
      setCategoryToDelete(null) // Réinitialise la catégorie à supprimer
   }

   const handleOpenDeletePlatConfirmation = (category, plat) => {
      setPlatToDelete({ category, name: plat }) // Stocke le plat à supprimer avec sa catégorie
      setDeletePlatConfirmationOpen(true) // Ouvre la pop-up de confirmation de suppression de plat
   }

   const handleConfirmDeletePlat = () => {
      setPlats((prevPlats) => {
         const updatedPlats = { ...prevPlats }
         updatedPlats[platToDelete.category] = updatedPlats[platToDelete.category].filter((plat) => plat !== platToDelete.name) // Supprime le plat de la catégorie
         return updatedPlats
      })
      setDeletePlatConfirmationOpen(false) // Ferme la pop-up de confirmation
      setPlatToDelete({ category: null, name: null }) // Réinitialise le plat à supprimer
   }

   const handleCancelDeletePlat = () => {
      setDeletePlatConfirmationOpen(false) // Ferme la pop-up de confirmation sans rien faire
      setPlatToDelete({ category: null, name: null }) // Réinitialise le plat à supprimer
   }

   return (
      <div className="addmenupage">
         <div className="main">
            <h1>Créer un menu</h1>
            <p>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
            <div className="create-section">
               <div className="part-one">
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
                              <FontAwesomeIcon
                                 icon={faTrashCan}
                                 onClick={() => handleOpenDeleteConfirmation(category)} // Ouvre la pop-up de confirmation lors du clic
                              />
                           </p>
                           {plats[category] && (
                              <ul>
                                 {plats[category].map((plat, platIndex) => (
                                    <li key={platIndex}>
                                       {plat}
                                       <FontAwesomeIcon icon={faPenToSquare} />
                                       <FontAwesomeIcon
                                          icon={faTrashCan}
                                          onClick={() => handleOpenDeletePlatConfirmation(category, plat)} // Ouvre la pop-up de confirmation pour supprimer le plat
                                       />
                                    </li>
                                 ))}
                              </ul>
                           )}
                           <button onClick={() => handleOpenPlatOverlay(category)}>+ Ajouter un plat aux {category}</button>
                        </div>
                     ))}
                     <button onClick={handleOpenCategoryOverlay}>+ Catégorie (ex : entrées, plats...)</button>
                  </div>
               </div>
               <div className="part-two">
                  <div className="title">
                     <p className="number">2</p>
                     <h2>Personnalisez votre menu</h2>
                  </div>
               </div>
               <div className="part-three">
                  <div className="title">
                     <p className="number">3</p>
                     <h2>Exportez & diffusez votre menu</h2>
                  </div>
               </div>
            </div>
            <Button text={"Étape suivante"} variant={"inactive"} />
         </div>
         <div className="preview">
            <div className="previewmenu"></div>
         </div>

         {isCategoryOverlayOpen && <CategoryOverlay onClose={handleCloseCategoryOverlay} onAddCategory={handleAddCategory} />}
         {isPlatOverlayOpen && (
            <PlatOverlay
               onClose={handleClosePlatOverlay}
               onAddPlat={handleAddPlat}
               categoryName={selectedCategory} // Passer le nom de la catégorie sélectionnée
            />
         )}

         {isDeleteConfirmationOpen && ( // Affichage de la pop-up de confirmation pour la suppression de catégorie
            <div className="delete-confirmation">
               <p>Êtes-vous sûr de vouloir supprimer la catégorie "{categoryToDelete}" et tous ses plats ?</p>
               <button onClick={handleConfirmDelete}>Confirmer</button>
               <button onClick={handleCancelDelete}>Annuler</button>
            </div>
         )}

         {isDeletePlatConfirmationOpen && ( // Affichage de la pop-up de confirmation pour la suppression de plat
            <div className="delete-confirmation">
               <p>
                  Êtes-vous sûr de vouloir supprimer le plat "{platToDelete.name}" dans la catégorie "{platToDelete.category}" ?
               </p>
               <button onClick={handleConfirmDeletePlat}>Confirmer</button>
               <button onClick={handleCancelDeletePlat}>Annuler</button>
            </div>
         )}
      </div>
   )
}

export default AddMenu
