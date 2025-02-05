const API_URL = "http://localhost:3001"

export const API_ROUTES = {
   LOGIN: `${API_URL}/api/users/login`, // Envoi du magic link
   VALIDATE_LOGIN: `${API_URL}/api/users/validate-login`, // Validation du token
   USER_MENUS: `${API_URL}/api/menus`,
   LOGOUT: `${API_URL}/api/users/logout`,
}

export const APP_ROUTES = {
   HOME: "/",
   SIGN_IN: "/login",
   DASHBOARD: "/dashboard",
   ADD_MENU: "/dashboard/mesmenus/addmenu",
   MENUS: "/dashboard/mesmenus",
   UPDATE_MENU: "/dashboard/mesmenus/modifier/:id",
}
