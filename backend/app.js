import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import testRoute from "./routes/testRoute.js" // Import de la route

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

// Routes
app.get("/", (req, res) => {
   res.send("Hello, My Menu Backend with Express 5!")
})
app.use("/api/test", testRoute)

// Gestionnaire d'erreurs
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send("Une erreur est survenue !")
})

export default app
