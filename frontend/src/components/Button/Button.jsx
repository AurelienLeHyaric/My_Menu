import React from "react"
import "./Button.scss"

function Button({ text, variant, onClick }) {
   return (
      <button className={`button ${variant}`} onClick={onClick}>
         {text}
      </button>
   )
}

export default Button
