import User from "../models/User.js"
import jwt from "jsonwebtoken"

// Inscription d'un nouvel utilisateur
export const signup = async (req, res) => {
   const { email } = req.body
   try {
      let user = await User.findOne({ email })
      if (!user) {
         user = new User({ email })
         await user.save()
      }
      res.status(201).json({ message: "Utilisateur créé avec succès", user })
   } catch (err) {
      res.status(500).json({ error: "Erreur lors de l'inscription." })
   }
}

// Connexion et génération du token
export const login = async (req, res) => {
   const { email } = req.body
   try {
      const user = await User.findOne({ email })
      if (!user) {
         return res.status(404).json({ message: "Utilisateur non trouvé." })
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
      res.status(200).json({ message: "Connexion réussie.", token })
   } catch (err) {
      res.status(500).json({ error: "Erreur lors de la connexion." })
   }
}
