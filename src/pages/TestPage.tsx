import { FC, useState } from 'react';
import Test from '@TestPageComponents/Test';
import { getIsLastIndex } from '@/utils';
import { questions } from '@/constants';

const TestPage: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { isLastIndex: isLastStep } = getIsLastIndex({
    array: questions,
    currentIndex: currentStep,
  });

  const incrementCurrentStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  return (
    <Test
      questions={questions}
      currentStep={currentStep}
      isLastStep={isLastStep}
      incrementCurrentStep={incrementCurrentStep}
    />
  );
};

export default TestPage;
