import tick from "../assets/images/tick.svg";

interface StepProps {
  stepNumber: number;
}

const Step = ({ stepNumber } :StepProps) => {
  const steps: number[] = [1, 2, 3, 4, 5];

  return (
    <ul className="step-list">
      {steps.map((step) => {
        let className = "";

        if (step < stepNumber) {
          className = "completed";
        } else if (step === stepNumber) {
          className = "active";
        }

        return (
          <li key={step} className={className}>
            <span>
              <img src={tick} alt={`Step ${step}`} />
            </span>
            <p>Step {step}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Step;