import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { sendMagicLink } from "../utils/email.js"

// Envoi du magic link de connexion par e-mail
export const sendLoginLink = async (req, res) => {
   let { email } = req.body

   // Normaliser l'email (en minuscules et sans espaces en début/fin)
   email = email.trim().toLowerCase()

   try {
      console.log("Email reçu :", email)

      // Recherche de l'utilisateur par e-mail ou création si inexistant
      let user = await User.findOne({ email })
      if (!user) {
         user = new User({ email })
         console.log("Nouveau utilisateur créé :", email)
         await user.save()
      } else {
         console.log("Utilisateur existant trouvé :", email)
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
      console.log("📩 Email envoyé par le backend :", req.body)

      res.status(200).json({ message: "Magic link envoyé par e-mail." })
   } catch (err) {
      console.error("Erreur lors de l'envoi du magic link :", err)
      res.status(500).json({ error: "Erreur lors de l'envoi du magic link." })
   }
}

// Validation du magic link et création du cookie d'authentification
export const validateLoginLink = async (req, res) => {
   try {
      let token = null

      // 1️⃣ Vérifier le token dans la query string
      if (req.query.token) {
         token = req.query.token
         console.log("Token reçu via query string :", token)
      }

      // 2️⃣ Vérifier le token dans les cookies
      else if (req.cookies.authToken) {
         token = req.cookies.authToken
         console.log("Token reçu via cookie :", token)
      }

      // 3️⃣ Vérifier le token dans le header Authorization
      else if (req.headers.authorization) {
         const authHeader = req.headers.authorization.split(" ")
         if (authHeader[0] === "Bearer" && authHeader[1]) {
            token = authHeader[1]
            console.log("Token reçu via header Authorization :", token)
         }
      }

      // Si aucun token n'est fourni
      if (!token) {
         return res.status(401).json({ error: "Token non fourni." })
      }

      // Vérification et décodage du token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Vérifier si l'utilisateur existe encore en base (utile si des comptes peuvent être supprimés)
      const user = await User.findById(decoded.userId)
      if (!user) {
         return res.status(401).json({ error: "Utilisateur introuvable." })
      }

      // Définition du cookie (s'il n'est pas déjà présent)
      if (!req.cookies.authToken) {
         res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Activer en HTTPS
            sameSite: "Strict",
         })
         console.log("Cookie authToken défini pour l'utilisateur :", decoded.userId)
      }

      console.log("✅ Connexion réussie pour l'utilisateur :", decoded.userId)
      return res.status(200).json({ message: "Connexion réussie", userId: decoded.userId })
   } catch (err) {
      console.error("❌ Erreur lors de la validation du token :", err)
      return res.status(401).json({ error: "Lien invalide ou expiré." })
   }
}
// Déconnexion : suppression du cookie d'authentification
export const logout = (req, res) => {
   let userId = "inconnu"
   if (req.cookies.authToken) {
      try {
         const decoded = jwt.verify(req.cookies.authToken, process.env.JWT_SECRET)
         userId = decoded.userId
      } catch (error) {
         console.error("Erreur lors du décodage du token pour la déconnexion :", error)
      }
   }
   res.clearCookie("authToken")
   console.log("Déconnexion réussie pour l'utilisateur :", userId)
   return res.status(200).json({ message: "Déconnexion réussie" })
}
