import React, { useState } from "react"
import "./AddMenuPage.scss"
import Button from "./../components/Button/Button"
import StepOne from "./../components/AddMenuSteps/StepOne/StepOne"
import StepTwo from "./../components/AddMenuSteps/StepTwo/StepTwo"
import StepThree from "./../components/AddMenuSteps/StepThree/StepThree"
import PlatForm from "../components/Menu/PlatForm/PlatForm"
import CategoryForm from "../components/Menu/CategoryForm/CategoryForm"

function AddMenu() {
   const [currentStep, setCurrentStep] = useState(1) // État pour suivre l'étape actuelle
   const [categories, setCategories] = useState([])
   const [plats, setPlats] = useState({})
   const [selectedCategory, setSelectedCategory] = useState(null)
   const [isCategoryFormOpen, setCategoryFormOpen] = useState(false)
   const [isPlatFormOpen, setPlatFormOpen] = useState(false)

   const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1)

   const handleAddCategory = (category) => {
      setCategories([...categories, category])
      setCategoryFormOpen(false)
   }

   const handleAddPlat = (newPlat) => {
      setPlats((prevPlats) => ({
         ...prevPlats,
         [selectedCategory]: [...(prevPlats[selectedCategory] || []), newPlat],
      }))
      setPlatFormOpen(false)
   }

   const handleDeleteCategory = (category) => {
      setCategories(categories.filter((cat) => cat !== category))
      const updatedPlats = { ...plats }
      delete updatedPlats[category]
      setPlats(updatedPlats)
   }

   const handleDeletePlat = (category, plat) => {
      setPlats((prevPlats) => {
         const updatedPlats = { ...prevPlats }
         updatedPlats[category] = updatedPlats[category].filter((p) => p !== plat)
         return updatedPlats
      })
   }

   const handleCustomize = (customization) => {
      console.log("Customization applied: ", customization)
   }

   const handleExport = (method) => {
      console.log(`Exporting via ${method}`)
   }

   return (
      <div className="addmenupage">
         <div className="main">
            <h1>Créer un menu</h1>
            {/* Étape 1 : Ajoutez vos plats */}
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
               {currentStep === 1 && (
                  <StepOne
                     categories={categories}
                     plats={plats}
                     onAddCategory={() => setCategoryFormOpen(true)}
                     onAddPlat={handleAddPlat}
                     onDeleteCategory={handleDeleteCategory}
                     onDeletePlat={handleDeletePlat}
                     onOpenPlatForm={(category) => {
                        setSelectedCategory(category)
                        setPlatFormOpen(true)
                     }}
                  />
               )}
            </div>

            {/* Étape 2 : Personnalisez votre menu */}
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>{currentStep === 2 && <StepTwo onCustomize={handleCustomize} />}</div>

            {/* Étape 3 : Exportez votre menu */}
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>{currentStep === 3 && <StepThree onExport={handleExport} />}</div>

            {/* Bouton pour passer à l'étape suivante */}
            {currentStep < 3 && <Button text={"Étape suivante"} onClick={handleNextStep} />}
         </div>

         <div className="preview">
            <div className="previewmenu">Prévisualisation du menu ici</div>
         </div>

         {isCategoryFormOpen && <CategoryForm onClose={() => setCategoryFormOpen(false)} onAddCategory={handleAddCategory} />}
         {isPlatFormOpen && <PlatForm onClose={() => setPlatFormOpen(false)} onAddPlat={handleAddPlat} categoryName={selectedCategory} />}
      </div>
   )
}

export default AddMenu
