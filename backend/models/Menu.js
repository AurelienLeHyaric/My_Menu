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
   const menuCount = await Menu.countDocuments({ user: this.user })
   this.name = `Menu ${menuCount + 1}`

   next()
})

const Menu = mongoose.model("Menu", menuSchema)
export default Menu
