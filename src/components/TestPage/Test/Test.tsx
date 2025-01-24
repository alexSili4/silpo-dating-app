import { FC } from 'react';
import TestForm from '@TestPageComponents/TestForm';
import { IProps } from './Test.types';
import { Container, Section } from './Test.styled';
import TestProgress from '@TestPageComponents/TestProgress';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const Test: FC<IProps> = ({
  questions,
  currentStep,
  isLastStep,
  incrementCurrentStep,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
       
            <TestForm
              questions={questions}
              currentStep={currentStep}
              isLastStep={isLastStep}
              incrementCurrentStep={incrementCurrentStep}
            />
            <TestProgress questions={questions} currentStep={currentStep} />
   
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default Test;
