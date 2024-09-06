import React from "react"
import PropTypes from "prop-types" // Importation des PropTypes
import { useForm } from "react-hook-form"
import "./CategoryForm.scss"
import Button from "../../Button/Button"

function CategoryForm({ onClose, onAddCategory }) {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm() // Utilisation de useForm

   const onSubmit = (data) => {
      if (data.categoryName.trim()) {
         onAddCategory(data.categoryName.trim()) // Appelle la fonction pour ajouter la catégorie
         onClose() // Ferme l'overlay après la soumission
      }
   }

   return (
      <div className="categoryoverlay" onClick={(e) => e.target.className === "categoryoverlay" && onClose()}>
         <div className="content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p className="category-title">Ajouter une catégorie</p>
            <form onSubmit={handleSubmit(onSubmit)}>
               <p className="category-name">Nom de la catégorie</p>
               <input
                  type="text"
                  {...register("categoryName", { required: "Le nom de la catégorie est requis" })} // Enregistrement avec validation
               />
               {errors.categoryName && <p className="error-message">{errors.categoryName.message}</p>} {/* Affiche le message d'erreur */}
               <Button
                  text={"Valider"}
                  variant={watch("categoryName")?.trim() ? "primary" : "inactive"} // Active le bouton seulement si le nom de la catégorie est rempli
                  disabled={!watch("categoryName")?.trim()} // Désactive le bouton si le champ est vide
               />
            </form>
         </div>
      </div>
   )
}

// Ajout des PropTypes pour valider les props
CategoryForm.propTypes = {
   onClose: PropTypes.func.isRequired,
   onAddCategory: PropTypes.func.isRequired,
}

export default CategoryForm
