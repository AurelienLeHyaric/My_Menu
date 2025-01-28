import express from "express"
import { signup, login } from "../controllers/userController.js"

const router = express.Router()

router.post("/signup", signup) // Inscription d'un utilisateur
router.post("/login", login) // Connexion avec token JWT

export default router
