import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardLayout from "./components/DashboardLayout/DashboardLayout"
import Dashboard from "./pages/DashboardPage"
import MesMenus from "./pages/MenusPage"
import AddMenuPage from "./pages/AddMenuPage"
import "./App.scss"

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               {/* Route parent pour le DashboardLayout */}
               <Route path="/dashboard" element={<DashboardLayout />}>
                  {/* Sous-routes */}
                  <Route index element={<Dashboard />} />
                  <Route path="mesmenus" element={<MesMenus />} />
                  <Route path="mesmenus/addmenu" element={<AddMenuPage />} />
               </Route>
            </Routes>
         </Router>
      </div>
   )
}

export default App
