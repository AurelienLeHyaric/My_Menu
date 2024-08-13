// src/components/HomePage/HomePage.js
import React from "react"
import "./HomePage.scss"
import Navbar from "../components/Navbar/Navbar"
import LoginButton from "../components/LoginButton/LoginButton"
import menuImage from "../assets/images/menu.webp"

function HomePage() {
   return (
      <div className="homepage">
         <Navbar />
         <main className="main-content">
            <section id="section1" className="section section-split">
               <div className="introduction">
                  <h1>Réalisez et diffusez votre menu personnalisé.</h1>
                  <p>Explorez nos outils pour créer un menu qui s'adapte à vos besoins.</p>
                  <LoginButton />
               </div>
               <div className="image-content">
                  <img src={menuImage} alt="Menu personnalisé" />
               </div>
            </section>
            <section id="section2" className="section">
               <h2>Personnalisez votre menu</h2>
               <p>Ajoutez des plats, modifiez les descriptions et les prix selon vos préférences.</p>
            </section>
            <section id="section3" className="section">
               <h2>Comment créer votre menu ?</h2>
               <p>Suivez nos étapes simples pour concevoir un menu attrayant et facile à utiliser.</p>
            </section>
         </main>
         <footer className="footer">
            <a href="#rights">Tous droits réservés</a> | <a href="#legal">Mentions légales</a>
         </footer>
      </div>
   )
}

export default HomePage
