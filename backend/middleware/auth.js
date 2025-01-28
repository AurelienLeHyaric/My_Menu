import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const auth = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1]
      if (!token) {
         throw "Token non fourni."
      }
      console.log("Token reçu :", token)
      console.log("Clé secrète utilisée :", process.env.JWT_SECRET)

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      req.auth = { userId: decodedToken.userId }

      next()
   } catch (error) {
      res.status(401).json({ message: "Authentification échouée.", error })
   }
}

export default auth
