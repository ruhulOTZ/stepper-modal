import React, { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  "Basic Information",
  "Contact Information",
  "Personal Information",
  "Order",
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            style={{ fontWeight: index === currentStep ? "bold" : "normal" }}
          >
            {step}
          </li>
        ))}
      </ul>
      <button onClick={prevStep} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Stepper;
