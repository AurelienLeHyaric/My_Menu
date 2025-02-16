import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const auth = (req, res, next) => {
   try {
      let token = null

      // 1️⃣ Vérifier le token dans le header Authorization
      if (req.headers.authorization) {
         const authHeader = req.headers.authorization.split(" ")
         if (authHeader[0] === "Bearer" && authHeader[1]) {
            token = authHeader[1]
            console.log("Token reçu via header Authorization :", token)
         }
      }
      // 2️⃣ Vérifier le token dans les cookies
      else if (req.cookies.authToken) {
         token = req.cookies.authToken
         console.log("Token reçu via cookie authToken :", token)
      }

      // Si aucun token trouvé
      if (!token) {
         return res.status(401).json({ message: "Authentification échouée. Token non fourni." })
      }

      // Vérification et décodage du token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      req.auth = { userId: decodedToken.userId }

      next()
   } catch (error) {
      res.status(401).json({ message: "Authentification échouée.", error })
   }
}

export default auth
