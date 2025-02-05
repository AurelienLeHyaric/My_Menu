import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { API_ROUTES } from "./utils/constants"

const mock = new MockAdapter(axios)

// Récupération de la variable d'environnement pour activer ou non le mock
const isMockEnabled = process.env.REACT_APP_USE_MOCK === "true"

if (isMockEnabled) {
   // Simuler l'envoi d'un Magic Link par e-mail
   mock.onPost(API_ROUTES.LOGIN).reply(200, {
      message: "Lien magique envoyé avec succès.",
   })

   // Simuler la validation d'un token de connexion
   mock.onGet(API_ROUTES.LOGIN).reply(200, {
      userId: "mocked-user-id",
      message: "Connexion réussie",
   })

   console.log("Mock API activé")
}

export default mock
