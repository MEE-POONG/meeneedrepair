import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


// Type definition for the StepperForm component
interface StepperFormProps {
  nextStep: () => void;
  prevStep?: () => void;
}

// Type definition for the StepperForm state
interface StepperFormState {
  currentStep: number;
}

function StepperForm() {
  const [state, setState] = useState<StepperFormState>({
    currentStep: 1,
  });

  const nextStep = () => {
    setState({
      ...state,
      currentStep: state.currentStep + 1,
    });
  };

  const prevStep = () => {
    setState({
      ...state,
      currentStep: state.currentStep - 1,
    });
  };

  return (
    <div>
      {state.currentStep === 1 && <Step1 nextStep={nextStep} />}
      {state.currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {state.currentStep === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
    </div>
  );

}

export default StepperForm;
