import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

// Récupération de la variable d'environnement pour activer ou non le mock
const isMockEnabled = process.env.REACT_APP_USE_MOCK === "true"

if (isMockEnabled) {
   const API_URL = "http://localhost:4000"

   // Simuler l'envoi d'un lien magique par e-mail
   mock.onPost(`${API_URL}/api/auth/send-magic-link`).reply(200, {
      message: "Lien magique envoyé avec succès.",
   })

   // Simuler la validation d'un token de connexion
   mock.onPost(`${API_URL}/api/auth/validate-token`).reply(200, {
      token: "mocked-auth-token",
   })

   console.log("Mock API activé")
}

export default mock
