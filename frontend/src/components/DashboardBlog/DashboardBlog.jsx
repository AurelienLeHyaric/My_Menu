import React from "react"
import "./DashboardBlog.scss"

function DashboardBlog({ src, alt, title, onClick }) {
   return (
      <article className="dasharticle" onClick={onClick}>
         <div className="dasharticle-container">
            <img className="dashimg" src={src} alt={alt} />
         </div>
         <span className="dashtitle">{title}</span>
      </article>
   )
}

export default DashboardBlog
