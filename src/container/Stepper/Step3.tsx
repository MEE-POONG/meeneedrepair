import React from 'react';

// Type definition for the Step1 component
interface Step3Props {
    nextStep: () => void;
    prevStep: () => void;
}

function Step3({ nextStep, prevStep }: Step3Props) {
    return (
        <div>
            Step3
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}
                className='py-1 px-4 rounded-full bg-secondary1 text-white'
            >
                Next
            </button>
        </div>
    );
}

export default Step3;
