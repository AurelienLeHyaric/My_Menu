import React from "react"
import Menu from "../DashboardMenu/DashboardMenu"
import { Outlet } from "react-router-dom"
import "./DashboardLayout.scss"

function DashboardLayout() {
   return (
      <div className="dashboard-layout">
         <Menu />
         <div className="dashboard-content">
            <Outlet />
         </div>
      </div>
   )
}

export default DashboardLayout
