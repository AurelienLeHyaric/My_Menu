import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { sendMagicLink } from "../utils/email.js"

// Envoi du magic link de connexion par e-mail
export const sendLoginLink = async (req, res) => {
   const { email } = req.body

   try {
      // Recherche de l'utilisateur par e-mail ou création si inexistant
      let user = await User.findOne({ email })
      if (!user) {
         user = new User({ email })
         await user.save()
      }

      // Génération du token JWT avec une validité de 15 minutes
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
         expiresIn: "15m",
      })
      console.log("Token JWT généré :", token)

      // Construction du magic link en incluant le token dans la query string
      const magicLink = `${process.env.FRONTEND_URL}/login?token=${token}`
      console.log("Magic link généré :", magicLink)

      // Envoi du magic link par e-mail
      await sendMagicLink(email, magicLink)
      console.log("📩 Email reçu par le backend :", req.body)

      res.status(200).json({ message: "Magic link envoyé par e-mail." })
   } catch (err) {
      console.error("Erreur lors de l'envoi du magic link :", err)
      res.status(500).json({ error: "Erreur lors de l'envoi du magic link." })
   }
}

// Validation du magic link et création du cookie d'authentification
export const validateLoginLink = async (req, res) => {
   try {
      let token

      if (req.query.token) {
         // Cas 1 : Validation à partir du token dans l'URL
         token = req.query.token
         const decoded = jwt.verify(token, process.env.JWT_SECRET)

         // Définition du cookie une fois le token validé
         res.cookie("authToken", token, {
            httpOnly: true,
            secure: false, // À passer à true en production avec HTTPS
            sameSite: "Lax",
         })

         return res.status(200).json({ message: "Connexion réussie", userId: decoded.userId })
      } else if (req.cookies.authToken) {
         // Cas 2 : Validation à partir du cookie existant
         token = req.cookies.authToken
         const decoded = jwt.verify(token, process.env.JWT_SECRET)

         return res.status(200).json({ message: "Connexion réussie", userId: decoded.userId })
      } else {
         return res.status(401).json({ error: "Token non fourni." })
      }
   } catch (err) {
      console.error("Erreur lors de la validation du token :", err)
      return res.status(401).json({ error: "Lien invalide ou expiré." })
   }
}

// Déconnexion : suppression du cookie d'authentification
export const logout = (req, res) => {
   res.clearCookie("authToken")
   res.status(200).json({ message: "Déconnexion réussie" })
}
