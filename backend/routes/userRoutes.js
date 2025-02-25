import { Router } from "express"
import { sendLoginLink, validateLoginLink, logout } from "../controllers/userController.js"

const router = Router()

router.post("/login", sendLoginLink) // Inscription/connexion d'un utilisateur
router.get("/validate-login", validateLoginLink) // Connexion avec token JWT
router.post("/logout", logout)

export default router
