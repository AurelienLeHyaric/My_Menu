const API_URL = "http://localhost:3001"

export const API_ROUTES = {
   LOGIN: `${API_URL}/api/users/login`, // Envoi du magic link
   VALIDATE_LOGIN: `${API_URL}/api/users/validate-login`, // Validation du token
   LOGOUT: `${API_URL}/api/users/logout`, // Déconnexion
   USER: `${API_URL}/api/users`, // Récupération des informations utilisateur
   USER_MENUS: `${API_URL}/api/menus`,
}

export const APP_ROUTES = {
   HOME: "/",
   SIGN_IN: "/login",
   LOGOUT: "/logout",
   DASHBOARD: "/dashboard",
   ADD_MENU: "/dashboard/mesmenus/addmenu",
   MENUS: "/dashboard/mesmenus",
   UPDATE_MENU: "/dashboard/mesmenus/modifier/:id",
}
