import mongoose from "mongoose"

const menuSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      categories: [{ type: String }],
      appearance: {
         font: { type: String, default: "Arial" },
         color: { type: String, default: "#000000" },
      },
   },
   { timestamps: true } // Ajoute createdAt et updatedAt automatiquement
)

const Menu = mongoose.model("Menu", menuSchema)

export default Menu
