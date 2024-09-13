import React, { useState } from "react"
import "./StepOne.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import Button from "../../Button/Button"
import PlatForm from "../../Menu/PlatForm/PlatForm"
import CategoryForm from "../../Menu/CategoryForm/CategoryForm"

function StepOne({ categories, plats, setCategories, setPlats }) {
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [isCategoryFormOpen, setCategoryFormOpen] = useState(false)
   const [isPlatFormOpen, setPlatFormOpen] = useState(false)
   const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
   const [categoryToDelete, setCategoryToDelete] = useState(null)
   const [isDeletePlatConfirmationOpen, setDeletePlatConfirmationOpen] = useState(false)
   const [platToDelete, setPlatToDelete] = useState({ category: null, name: null })

   // Ouverture des formulaires
   const handleOpenCategoryForm = () => setCategoryFormOpen(true)
   const handleOpenPlatForm = (category) => {
      setSelectedCategory(category)
      setPlatFormOpen(true)
   }

   // Ajout d'une catégorie
   const handleAddCategory = (category) => {
      setCategories([...categories, category])
      setCategoryFormOpen(false)
   }

   // Ajout d'un plat
   const handleAddPlat = (newPlat) => {
      setPlats((prevPlats) => ({
         ...prevPlats,
         [selectedCategory]: [...(prevPlats[selectedCategory] || []), newPlat],
      }))
      setPlatFormOpen(false)
   }

   // Suppression d'une catégorie
   const handleOpenDeleteCategoryConfirmation = (category) => {
      setCategoryToDelete(category)
      setDeleteConfirmationOpen(true)
   }

   const handleConfirmDeleteCategory = () => {
      setCategories(categories.filter((cat) => cat !== categoryToDelete))
      const updatedPlats = { ...plats }
      delete updatedPlats[categoryToDelete]
      setPlats(updatedPlats)
      setDeleteConfirmationOpen(false)
      setCategoryToDelete(null)
   }

   const handleCancelDeleteCategory = () => {
      setDeleteConfirmationOpen(false)
      setCategoryToDelete(null)
   }

   // Suppression d'un plat
   const handleOpenDeletePlatConfirmation = (category, platName) => {
      setPlatToDelete({ category, name: platName })
      setDeletePlatConfirmationOpen(true)
   }

   const handleConfirmDeletePlat = () => {
      setPlats((prevPlats) => {
         const updatedPlats = { ...prevPlats }
         updatedPlats[platToDelete.category] = updatedPlats[platToDelete.category].filter((p) => p.name !== platToDelete.name)
         return updatedPlats
      })
      setDeletePlatConfirmationOpen(false)
      setPlatToDelete({ category: null, name: null })
   }

   const handleCancelDeletePlat = () => {
      setDeletePlatConfirmationOpen(false)
      setPlatToDelete({ category: null, name: null })
   }

   return (
      <div className="step-one">
         <div className="zone-title">
            <p className="number">1</p>
            <h2>Ajoutez vos plats</h2>
         </div>
         <div className="menu-list">
            {categories.map((category, index) => (
               <div key={index}>
                  <div className="category-item">
                     <p>{category}</p>
                     <FontAwesomeIcon icon={faPenToSquare} />
                     <FontAwesomeIcon icon={faTrashCan} onClick={() => handleOpenDeleteCategoryConfirmation(category)} />
                  </div>
                  {plats[category] && (
                     <ul className="plat-list">
                        {plats[category].map((plat, platIndex) => (
                           <li className="plat-item" key={platIndex}>
                              <span>{plat.name}</span>
                              <FontAwesomeIcon icon={faPenToSquare} />
                              <FontAwesomeIcon icon={faTrashCan} onClick={() => handleOpenDeletePlatConfirmation(category, plat.name)} />
                           </li>
                        ))}
                     </ul>
                  )}
                  <button onClick={() => handleOpenPlatForm(category)}>+ Ajouter un plat aux {category}</button>
               </div>
            ))}

            <Button text={"+ Ajouter une catégorie"} onClick={handleOpenCategoryForm} />

            {/* Pop-up de confirmation pour la suppression de catégorie */}
            {isDeleteConfirmationOpen && (
               <div className="delete-confirmation">
                  <p>Êtes-vous sûr de vouloir supprimer la catégorie "{categoryToDelete}" et tous ses plats ?</p>
                  <button onClick={handleConfirmDeleteCategory}>Confirmer</button>
                  <button onClick={handleCancelDeleteCategory}>Annuler</button>
               </div>
            )}

            {/* Pop-up de confirmation pour la suppression de plat */}
            {isDeletePlatConfirmationOpen && (
               <div className="delete-confirmation">
                  <p>
                     Êtes-vous sûr de vouloir supprimer le plat "{platToDelete.name}" dans la catégorie "{platToDelete.category}" ?
                  </p>
                  <button onClick={handleConfirmDeletePlat}>Confirmer</button>
                  <button onClick={handleCancelDeletePlat}>Annuler</button>
               </div>
            )}

            {/* Formulaire d'ajout de catégorie */}
            {isCategoryFormOpen && <CategoryForm onClose={() => setCategoryFormOpen(false)} onAddCategory={handleAddCategory} />}

            {/* Formulaire d'ajout de plat */}
            {isPlatFormOpen && <PlatForm onClose={() => setPlatFormOpen(false)} onAddPlat={handleAddPlat} categoryName={selectedCategory} />}
         </div>
      </div>
   )
}

export default StepOne
