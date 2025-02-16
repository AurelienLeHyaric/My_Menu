import { Router } from "express"
import { createMenu, getMenus, getMenu, updateMenu, deleteMenu } from "../controllers/menuController.js"
import auth from "../middleware/auth.js"

const router = Router()

router.post("/", auth, createMenu) // Créer un menu
router.get("/", auth, getMenus) // Récupérer tous les menus de l'utilisateur
router.get("/:id", auth, getMenu) // Récupérer un menu spécifique
router.put("/:id", auth, updateMenu) // Mettre à jour un menu
router.delete("/:id", auth, deleteMenu) // Supprimer un menu

export default router
