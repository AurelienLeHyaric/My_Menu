import React, { useState } from "react"
import "./HomePage.scss"
import Navbar from "../components/Navbar/Navbar"
import Button from "../components/Button/Button"
import Steps from "../components/Steps/Steps"
import OverlayManager from "../components/OverlayManager/OverlayManager"
import menuImage from "../assets/images/menu.webp"

function HomePage() {
   const [isOverlayOpen, setOverlayOpen] = useState(false)

   const handleOpenOverlay = () => {
      setOverlayOpen(true)
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
            <section id="section2" className="section customize-menu">
               <div className="customize-text">
                  <h2>Personnalisez votre menu</h2>
                  <p>
                     Créez votre menu en ajoutant vos plats et boissons, et organisez-le selon vos préférences. Pour l'imprimer ou le partager en ligne, téléchargez votre menu dans le format de votre
                     choix et partagez-le avec vos clients ! Explorez nos outils pour créer un menu qui s'adapte à vos besoins.
                  </p>
                  <Button text="Je me lance" variant="secondary" onClick={handleOpenOverlay} />
               </div>
               <div className="customize-images">
                  <img src={menuImage} alt="Menu personnalisé" />
                  <img src={menuImage} alt="Menu personnalisé" />
               </div>
            </section>
            <section id="section3" className="section">
               <h2>Comment créer votre menu ?</h2>
               <Steps />
            </section>

            {/* Overlay Manager */}
            {isOverlayOpen && <OverlayManager onClose={handleCloseOverlay} />}
         </main>
         <footer className="footer">
            <a href="#rights">Tous droits réservés</a> | <a href="#legal">Mentions légales</a>
         </footer>
      </div>
   )
}

export default HomePage
