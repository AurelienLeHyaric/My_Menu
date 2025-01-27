import express from "express"
const router = express.Router()

// Exemple de route GET
router.get("/", (req, res) => {
   res.json({ message: "Route de test fonctionnelle !" })
})

// Exemple de route POST
router.post("/", (req, res) => {
   const { data } = req.body
   res.status(201).json({ message: "Données reçues avec succès", data })
})

export default router
