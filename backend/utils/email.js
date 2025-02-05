import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
   },
})

export const sendMagicLink = async (email, magicLink) => {
   console.log(`Tentative d'envoi à : ${email}`)
   console.log(`Magic link généré : ${magicLink}`)

   const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Votre lien de connexion",
      text: `Cliquez sur ce lien pour vous connecter : ${magicLink}`,
      html: `<p>Cliquez sur ce lien pour vous connecter : <a href="${magicLink}">Connexion</a></p>`,
   }

   //optionnel:
   try {
      const info = await transporter.sendMail(mailOptions)
      console.log("E-mail envoyé :", info.response)
   } catch (error) {
      console.error("Erreur d'envoi d'email :", error)
   }

   await transporter.sendMail(mailOptions)
}
