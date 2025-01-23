import React from "react"
import "./DashboardPage.scss"
import { useNavigate } from "react-router-dom"
import DashboardButton from "../components/DashboardButton/DashboardButton"
import DashboardBlog from "../components/DashboardBlog/DashboardBlog"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge, faFileLines, faShareFromSquare, faPrint } from "@fortawesome/free-solid-svg-icons"
import menuImage from "../assets/images/menu.webp"
import { APP_ROUTES } from "../utils/constants"

function Dashboard() {
   const navigate = useNavigate()

   const handleAddMenuClick = () => {
      navigate(APP_ROUTES.ADD_MENU)
   }

   return (
      <div className="dashboard">
         <div className="dashboard-welcome">
            <FontAwesomeIcon icon={faIdBadge} className="faIdBadge" />
            <h1>
               Bienvenue, <br /> X
            </h1>
         </div>
         <div className="dashboard-button"></div>
         <DashboardButton text="Créer un menu" icon={faFileLines} onClick={handleAddMenuClick} />
         <DashboardButton text="Diffuser un menu" icon={faShareFromSquare} />
         <DashboardButton text="Imprimer un menu" icon={faPrint} />
         <div className="dashboard-h3">
            <h3>Pour aller plus loin</h3>
         </div>
         <div className="dashboard-extra"></div>
         <DashboardBlog src={menuImage} alt="article-blog" title="Faites réaliser vos supports par un graphiste pro" />
         <DashboardBlog src={menuImage} alt="article-blog" title="Découvrez nos conseils pour un menu réussi" />
         <DashboardBlog src={menuImage} alt="article-blog" title="Comment poster son menu sur Instagram ?" />
      </div>
   )
}

export default Dashboard
