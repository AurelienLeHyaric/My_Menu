import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Button from "../components/Button/Button"
import OverlayManager from "../components/OverlayManager/OverlayManager"
import menuImage from "../assets/images/menu.webp"
import "./HomePage.scss"

function HomePage() {
   const location = useLocation()
   const queryParams = new URLSearchParams(location.search)
   const token = queryParams.get("token")

   const [isOverlayOpen, setOverlayOpen] = useState(false)
   const [initialStep, setInitialStep] = useState(1)

   useEffect(() => {
      // Si un token est présent dans l'URL, on ouvre l'overlay en démarrant à l'étape 3 (validation)
      if (token) {
         setOverlayOpen(true)
         setInitialStep(3)
      }
   }, [token])

   const handleOpenOverlay = () => {
      setOverlayOpen(true)
      setInitialStep(1)
   }

   const handleCloseOverlay = () => {
      setOverlayOpen(false)
   }

   return (
      <div className="homepage">
         <Navbar onOpenOverlay={handleOpenOverlay} />
         <main className="main-content">
            <section id="section1" className="section section-split">
               <div className="introduction">
                  <h1>Réalisez et diffusez votre menu personnalisé.</h1>
                  <p>Avec My Menu, offrez à votre établissement une identité unique. Concevez votre menu en ligne et diffusez-le sur toutes les plateformes !</p>
                  <Button text="Se connecter" variant="primary" onClick={handleOpenOverlay} />
               </div>
               <div className="image-content">
                  <img src={menuImage} alt="Menu personnalisé" />
               </div>
            </section>
            <section id="section3" className="section">
               <h2>Comment créer votre menu ?</h2>
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
            </section>

            {/* Overlay Manager */}
            {isOverlayOpen && <OverlayManager onClose={handleCloseOverlay} initialStep={initialStep} token={token} />}
         </main>
         <footer className="footer">
            <a href="#rights">Tous droits réservés</a> | <a href="#legal">Mentions légales</a>
         </footer>
      </div>
   )
}

export default HomePage
