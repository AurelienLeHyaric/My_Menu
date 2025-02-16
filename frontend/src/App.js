import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardLayout from "./components/DashboardLayout/DashboardLayout"
import Dashboard from "./pages/DashboardPage"
import MesMenus from "./pages/MenusPage"
import AddMenuPage from "./pages/AddMenuPage"
import LogoutPage from "./pages/LogoutPage"
import { APP_ROUTES } from "./utils/constants"
import "./App.scss"

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               {/* Route pour la page d'accueil */}
               <Route path={APP_ROUTES.HOME} element={<HomePage />} />
               {/* Routes de connexion */}
               <Route path={APP_ROUTES.SIGN_IN} element={<HomePage />} />
               {/* Route de déconnexion */}
               <Route path={APP_ROUTES.LOGOUT} element={<LogoutPage />} />

               {/* Route parent pour le DashboardLayout */}
               <Route path={APP_ROUTES.DASHBOARD} element={<DashboardLayout />}>
                  {/* Sous-routes */}
                  <Route index element={<Dashboard />} />
                  <Route path={APP_ROUTES.MENUS} element={<MesMenus />} />
                  <Route path={APP_ROUTES.ADD_MENU} element={<AddMenuPage />} />
                  <Route path={APP_ROUTES.UPDATE_MENU} element={<AddMenuPage />} />
               </Route>
            </Routes>
         </Router>
      </div>
   )
}

export default App
