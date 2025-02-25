import mongoose from "mongoose"

const menuSchema = new mongoose.Schema(
   {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      name: { type: String },
      categories: [
         {
            name: { type: String, required: true },
            dishes: [
               {
                  name: { type: String, required: true },
                  price: { type: Number, required: true },
                  description: { type: String },
               },
            ],
         },
      ],
      font: { type: String, default: "Arial" },
      color: { type: String, default: "#000000" },
   },
   { timestamps: true }
)

// Middleware pour incrémenter automatiquement le nom des menus
menuSchema.pre("save", async function (next) {
   if (!this.isNew) return next()

   const Menu = mongoose.model("Menu", menuSchema)

   // Récupérer tous les noms de menus existants pour l'utilisateur
   const existingMenus = await Menu.find({ user: this.user }).select("name")

   // Extraire les numéros de menu existants
   const menuNumbers = existingMenus.map((menu) => parseInt(menu.name.replace("Menu ", ""), 10)).filter((num) => !isNaN(num))

   // Trouver le plus grand numéro existant
   const maxMenuNumber = menuNumbers.length > 0 ? Math.max(...menuNumbers) : 0

   // Nommer le nouveau menu avec le numéro suivant
   this.name = `Menu ${maxMenuNumber + 1}`

   next()
})

const Menu = mongoose.model("Menu", menuSchema)
export default Menu
