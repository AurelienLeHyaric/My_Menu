import React, { useState, useRef } from "react"
import "./AddMenuPage.scss"
import Button from "./../components/Button/Button"
import StepOne from "./../components/AddMenuSteps/StepOne/StepOne"
import StepTwo from "./../components/AddMenuSteps/StepTwo/StepTwo"
import StepThree from "./../components/AddMenuSteps/StepThree/StepThree"
import html2pdf from "html2pdf.js"

function AddMenu() {
   const [currentStep, setCurrentStep] = useState(1)
   const [categories, setCategories] = useState([])
   const [plats, setPlats] = useState({})
   const [customization, setCustomization] = useState({ font: "Georgia", color: "#000000" })
   const previewRef = useRef(null) // Référence à la section de prévisualisation

   const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1)
   const handlePrevStep = () => setCurrentStep((prevStep) => prevStep - 1)

   const handleCustomize = (newCustomization) => {
      setCustomization(newCustomization)
   }

   // Fonction pour exporter le contenu de la prévisualisation en PDF
   const handleExportPDF = () => {
      const element = previewRef.current
      const opt = {
         margin: [0.5, 0.5],
         filename: "menu.pdf",
         image: { type: "jpeg", quality: 0.98 },
         html2canvas: { scale: 2, useCORS: true }, // Améliore la résolution avec scale
         jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      }
      html2pdf().from(element).set(opt).save()
   }

   const handleSave = () => {
      const element = previewRef.current
      const opt = {
         margin: [0.5, 0.5],
         filename: "menu.pdf",
         image: { type: "jpeg", quality: 0.98 },
         html2canvas: { scale: 2, useCORS: true },
         jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      }
      html2pdf().from(element).set(opt).save()
   }
   return (
      <div className="addmenupage">
         <div className="main">
            <div className="create-section">
               <h1>Créer un menu</h1>
               <p>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>

               {/* Étape 1 : Ajoutez vos plats */}
               <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                  {currentStep === 1 && <StepOne categories={categories} plats={plats} setCategories={setCategories} setPlats={setPlats} />}
               </div>

               {/* Étape 2 : Personnalisez votre menu */}
               <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                  {currentStep === 2 && <StepTwo onCustomize={handleCustomize} currentFont={customization.font} currentColor={customization.color} />}
               </div>

               {/* Étape 3 : Exportez votre menu */}
               <div className={`step ${currentStep === 3 ? "active" : ""}`}>{currentStep === 3 && <StepThree onExport={handleExportPDF} />}</div>

               {/* Bouton pour passer à l'étape précédente */}
               {currentStep > 1 && <Button text={"Étape précédente"} onClick={handlePrevStep} />}

               {/* Bouton pour passer à l'étape suivante */}
               {currentStep < 3 && <Button text={"Étape suivante"} onClick={handleNextStep} />}

               {currentStep === 3 && <Button text={"Sauvegarder"} onClick={handleSave} />}
            </div>
         </div>

         {/* Prévisualisation en temps réel */}
         <div className="preview" ref={previewRef}>
            <div
               className="previewmenu"
               style={{
                  fontFamily: customization.font,
                  color: customization.color,
               }}
            >
               <h2 style={{ color: customization.color }}>MENU</h2>
               {categories.map((category) => (
                  <div key={category}>
                     <h3 style={{ color: customization.color }}>{category}</h3>
                     {plats[category] && (
                        <ul>
                           {plats[category].map((plat, index) => (
                              <li key={index}>
                                 <div className="previewplat">
                                    <span className="plat">{plat.name}</span>
                                    <span className="description">{plat.description}</span>
                                 </div>
                                 <span>{plat.price}€</span>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default AddMenu
