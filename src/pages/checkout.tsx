import Link from "next/link";
import RootLayout from "../components/layout";
import StepperForm from '../container/Stepper/StepperForm';

export default function Payment() {
    return (
        <RootLayout>
            <div className="container mx-auto">
                <StepperForm/>
            </div>
        </RootLayout>
    )
}