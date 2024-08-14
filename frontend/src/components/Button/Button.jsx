import React from "react"
import "./Button.scss"

function Button({ text, variant }) {
   return <button className={`button ${variant}`}>{text}</button>
}

export default Button
