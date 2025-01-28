import Menu from "../models/Menu.js"

// Récupérer tous les menus d'un utilisateur
export const getMenus = async (req, res) => {
   try {
      const menus = await Menu.find({ userId: req.auth.userId })
      res.status(200).json(menus)
   } catch (err) {
      res.status(500).json({ error: "Erreur serveur." })
   }
}

// Créer un nouveau menu
export const createMenu = async (req, res) => {
   const { name, categories, appearance } = req.body
   try {
      const menu = new Menu({
         name,
         userId: req.auth.userId,
         categories,
         appearance,
      })
      await menu.save()
      res.status(201).json({ message: "Menu créé avec succès", menu })
   } catch (err) {
      res.status(500).json({ error: "Erreur lors de la création du menu." })
   }
}

// Supprimer un menu
export const deleteMenu = async (req, res) => {
   try {
      const menu = await Menu.findByIdAndDelete(req.params.id)
      if (!menu) return res.status(404).json({ error: "Menu introuvable." })
      res.status(200).json({ message: "Menu supprimé avec succès" })
   } catch (err) {
      res.status(500).json({ error: "Erreur serveur." })
   }
}
