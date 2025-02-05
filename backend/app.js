import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import menuRoutes from "./routes/menuRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()

// Middleware pour parser les cookies (à utiliser AVANT CORS)
app.use(cookieParser())

// Middleware CORS
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true, // Permet d'envoyer les cookies avec les requêtes
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
)

// Middleware pour parser les corps de requête en JSON et urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connexion à MongoDB
mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log("✅ Connexion à MongoDB réussie !"))
   .catch((error) => {
      console.error("❌ Connexion à MongoDB échouée :", error)
      process.exit(1)
   })

// Route principale (test)
app.get("/", (req, res) => {
   res.send("Hello, My Menu Backend with Express 5!")
})

// Montage des routes API
app.use("/api/users", userRoutes)
app.use("/api/menus", menuRoutes)

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
   console.error("❌ Erreur détectée :", err.stack)
   res.status(500).json({ error: "Une erreur interne est survenue !" })
})

export default app
