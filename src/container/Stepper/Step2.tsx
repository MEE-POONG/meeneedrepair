import React from 'react';

// Type definition for the Step1 component
interface Step2Props {
    nextStep: () => void;
    prevStep: () => void;
}

function Step2({ nextStep, prevStep }: Step2Props) {
    return (
        <div>
            Step2
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}
                className='py-1 px-4 rounded-full bg-secondary1 text-white'
            >
                Next
            </button>
        </div>
    );
}

export default Step2;
