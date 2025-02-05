// OverlayManager.jsx
import React, { useState } from "react"
import LoginOverlay from "../OverlayLogin/OverlayLogin"
import ConfirmationOverlay from "../OverlayConfirmation/OverlayConfirmation"
import ValidationOverlay from "../OverlayValidation/OverlayValidation"

function OverlayManager({ onClose, initialStep = 1, token }) {
   const [step, setStep] = useState(initialStep)

   const handleNext = () => {
      setStep(step + 1)
   }

   const handleOverlayClick = (e) => {
      if (e.target.className === "overlay") {
         onClose()
      }
   }

   return (
      <div className="overlay" onClick={handleOverlayClick}>
         {step === 1 && <LoginOverlay onNext={handleNext} onClose={onClose} />}
         {step === 2 && <ConfirmationOverlay onNext={handleNext} onClose={onClose} token={token} />}
         {step === 3 && <ValidationOverlay token={token} onClose={onClose} />}
      </div>
   )
}

export default OverlayManager
