import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import menuRoutes from "./routes/menuRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connexion à MongoDB
mongoose
   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("Connexion à MongoDB réussie !"))
   .catch((error) => console.error("Connexion à MongoDB échouée :", error))

// Routes principales
app.get("/", (req, res) => {
   res.send("Hello, My Menu Backend with Express 5!")
})
app.use("/api/users", userRoutes)
app.use("/api/menus", menuRoutes) // Association des routes des menus

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send("Une erreur est survenue !")
})

export default app
