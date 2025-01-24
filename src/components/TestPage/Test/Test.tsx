import { FC } from 'react';
import TestForm from '@TestPageComponents/TestForm';
import { IProps } from './Test.types';

const Test: FC<IProps> = ({
  questions,
  currentStep,
  isLastStep,
  incrementCurrentStep,
}) => {
  return (
    <TestForm
      questions={questions}
      currentStep={currentStep}
      isLastStep={isLastStep}
      incrementCurrentStep={incrementCurrentStep}
    />
  );
};

export default Test;
