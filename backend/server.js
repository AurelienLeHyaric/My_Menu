import express from "express"
import dotenv from "dotenv"

// Configuration de l'environnement
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001 // Défini dans le .env ou utilise 3001 par défaut

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route par défaut
app.get("/", (req, res) => {
   res.send("Hello, My Menu Backend with Express 5!")
})

// Gestionnaire d'erreurs
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send("Une erreur est survenue !")
})

// Démarrage du serveur
app.listen(PORT, () => {
   console.log(`Serveur Express 5.0 opérationnel sur le port ${PORT}`)
})
