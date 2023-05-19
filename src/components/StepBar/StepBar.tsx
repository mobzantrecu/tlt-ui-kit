
interface StepBarProps {
  currentStep: number;
  steps: number[];
}

interface Step {
  stepNumber: number;
  modifier: "finished" | "current" | "next";
}

interface StepSeparator {
  stepNumber: number;
  isCurrent: boolean;
}

const modifierStrategy = (step: number, currentStep: number) => {
  if (currentStep >= step) return "finished";
  if (currentStep <= step) return "next";
  return "current";
};

const StepIndicator = ({ stepNumber, modifier }: Step) => {
  console.log(modifier);

  return <div>{stepNumber}</div>;
};

const StepSeparator = ({ stepNumber, isCurrent }: StepSeparator) => {
  return <div></div>;
};

const StepBar = ({ steps, currentStep }: StepBarProps) => {
  const stepsComponent = steps.map((step) => {
    const modifier = modifierStrategy(step, currentStep);

    return <StepIndicator stepNumber={step} modifier={modifier} />;
  });

  return <div>{stepsComponent}</div>;
};

export default StepBar;
