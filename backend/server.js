import app from "./app.js"

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
   console.log(`Serveur Express 5.0 opérationnel sur le port ${PORT}`)
})
