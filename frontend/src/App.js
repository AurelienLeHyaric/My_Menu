import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"

import "./App.scss"

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
