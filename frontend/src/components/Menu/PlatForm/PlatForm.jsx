import React from "react"
import PropTypes from "prop-types" // Import des PropTypes
import { useForm } from "react-hook-form"
import "./PlatForm.scss"
import Button from "../../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

function PlatForm({ onClose, onAddPlat, categoryName }) {
   const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
   } = useForm()
   const platImage = watch("platImage")

   const onSubmit = (data) => {
      if (data.platName && data.platPrice) {
         const newPlat = {
            name: data.platName,
            price: data.platPrice,
            description: data.platDescription || "",
            image: platImage || null,
         }
         onAddPlat(newPlat)
         onClose()
      }
   }

   const handleImageChange = (e) => {
      const file = e.target.files[0]
      if (file && file.size <= 2 * 1024 * 1024) {
         setValue("platImage", URL.createObjectURL(file))
      } else {
         alert("Le fichier doit être inférieur à 2 Mo.")
      }
   }

   return (
      <div className="platoverlay" onClick={(e) => e.target.className === "platoverlay" && onClose()}>
         <div className="content">
            <button className="close-button" onClick={onClose}>
               &times;
            </button>
            <p>Ajoutez un plat à '{categoryName}' :</p>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="image-upload">
                  <label htmlFor="file-input">
                     {platImage ? (
                        <img src={platImage} alt="Aperçu" className="preview-image" />
                     ) : (
                        <>
                           <FontAwesomeIcon icon={faImage} className="icon-camera" />
                           <span>+ Ajouter photo</span>
                           <p className="file-size-info">max 2 mo</p>
                        </>
                     )}
                  </label>
                  <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
               </div>
               <div className="input-row">
                  <InputField label="Nom du plat" type="text" className="plat-group" {...register("platName", { required: "Le nom du plat est requis" })} />
                  {errors.platName && <p className="error-message">{errors.platName.message}</p>}

                  <InputField label="Prix" type="number" className="price-group" {...register("platPrice", { required: "Le prix est requis", min: 0 })} />
                  {errors.platPrice && <p className="error-message">{errors.platPrice.message}</p>}
               </div>
               <InputField label="Description (optionnel)" type="text" className="plat-description" {...register("platDescription")} />
               <Button text={"Valider"} variant={watch("platName") && watch("platPrice") ? "primary" : "inactive"} disabled={!watch("platName") || !watch("platPrice")} />
            </form>
         </div>
      </div>
   )
}

// Ajout des PropTypes pour la validation des props
PlatForm.propTypes = {
   onClose: PropTypes.func.isRequired,
   onAddPlat: PropTypes.func.isRequired,
   categoryName: PropTypes.string.isRequired,
}

const InputField = React.forwardRef(({ label, type, className, ...props }, ref) => (
   <div className={`input-group ${className}`}>
      <p>{label}</p>
      <input type={type} ref={ref} {...props} />
   </div>
))

export default PlatForm
