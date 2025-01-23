const API_URL = "http://localhost:4000"

export const API_ROUTES = {
   SIGN_UP: `${API_URL}/api/auth/signup`,
   SIGN_IN: `${API_URL}/api/auth/login`,
   SEND_MAGIC_LINK: `${API_URL}/api/auth/send-magic-link`,
   VALIDATE_TOKEN: `${API_URL}/api/auth/validate-token`,
   USER_MENUS: `${API_URL}/api/menus`,
}

export const APP_ROUTES = {
   HOME: "/",
   SIGN_IN: "/connexion",
   DASHBOARD: "/dashboard",
   ADD_MENU: "/dashboard/mesmenus/addmenu",
   MENUS: "/dashboard/mesmenus",
   UPDATE_MENU: "/dashboard/mesmenus/modifier/:id",
}
