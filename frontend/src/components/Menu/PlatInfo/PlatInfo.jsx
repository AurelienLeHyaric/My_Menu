import * as PropTypes from "prop-types"
import React from "react"

function PlatInfo({ plat }) {
   return (
      <div>
         <h1>{plat.name}</h1> {/* Affiche le nom du plat */}
         <p>{plat.category}</p> {/* Affiche la catégorie du plat */}
         <p>{plat.price}</p> {/* Affiche le prix du plat */}
         <p>{plat.description}</p> {/* Affiche la description du plat */}
         {plat.image && <img src={plat.image} alt={plat.name} />} {/* Affiche l'image si elle existe */}
      </div>
   )
}

PlatInfo.propTypes = {
   plat: PropTypes.shape({
      category: PropTypes.string.isRequired, // Catégorie à laquelle appartient le plat
      name: PropTypes.string.isRequired, // Nom du plat
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Prix du plat
      description: PropTypes.string, // Description du plat (facultatif)
      image: PropTypes.string, // URL de l'image (facultatif)
   }).isRequired,
}

export default PlatInfo
