import Menu from "../models/Menu.js"

// 🔹 Créer un menu
export const createMenu = async (req, res) => {
   try {
      const { categories, font, color } = req.body

      const newMenu = new Menu({
         user: req.auth.userId, // Récupéré via le middleware d'authentification
         name: "", // Ajout temporaire pour éviter l'erreur de validation
         categories,
         font,
         color,
      })

      await newMenu.save()
      res.status(201).json(newMenu)
   } catch (error) {
      console.error("Erreur lors de la création du menu :", error)
      res.status(500).json({ message: "Erreur serveur" })
   }
}

// 🔹 Obtenir tous les menus d'un utilisateur
export const getMenus = async (req, res) => {
   try {
      const menus = await Menu.find({ user: req.auth.userId })
      res.status(200).json(menus)
   } catch (error) {
      console.error("Erreur lors de la récupération des menus :", error)
      res.status(500).json({ message: "Erreur serveur" })
   }
}

// 🔹 Obtenir un menu spécifique par son ID
export const getMenu = async (req, res) => {
   try {
      const menu = await Menu.findOne({ _id: req.params.id, user: req.auth.userId })
      if (!menu) {
         return res.status(404).json({ message: "Menu introuvable" })
      }
      res.status(200).json(menu)
   } catch (error) {
      console.error("Erreur lors de la récupération du menu :", error)
      res.status(500).json({ message: "Erreur serveur" })
   }
}

// 🔹 Mettre à jour un menu
export const updateMenu = async (req, res) => {
   try {
      const updatedMenu = await Menu.findOneAndUpdate({ _id: req.params.id, user: req.auth.userId }, req.body, { new: true })

      if (!updatedMenu) {
         return res.status(404).json({ message: "Menu introuvable" })
      }

      res.status(200).json(updatedMenu)
   } catch (error) {
      console.error("Erreur lors de la mise à jour du menu :", error)
      res.status(500).json({ message: "Erreur serveur" })
   }
}

// 🔹 Supprimer un menu
export const deleteMenu = async (req, res) => {
   try {
      const deletedMenu = await Menu.findOneAndDelete({ _id: req.params.id, user: req.auth.userId })

      if (!deletedMenu) {
         return res.status(404).json({ message: "Menu introuvable" })
      }

      res.status(200).json({ message: "Menu supprimé avec succès" })
   } catch (error) {
      console.error("Erreur lors de la suppression du menu :", error)
      res.status(500).json({ message: "Erreur serveur" })
   }
}
