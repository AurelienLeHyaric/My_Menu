import express from "express"
import { getMenus, createMenu, deleteMenu } from "../controllers/menuController.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.get("/", auth, getMenus)
router.post("/", auth, createMenu)
router.delete("/:id", auth, deleteMenu)

export default router
