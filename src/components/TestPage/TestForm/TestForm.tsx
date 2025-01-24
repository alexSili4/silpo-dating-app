import { FC } from 'react';
import { IProps } from './TestForm.types';
import { Form } from './TestForm.styled';
import Question from '@TestPageComponents/Question';
import { useForm } from 'react-hook-form';

const TestForm: FC<IProps> = ({
  questions,
  currentStep,
  isLastStep,
  incrementCurrentStep,
}) => {
  const { register, handleSubmit } = useForm();

  const onTestFormSubmit = (data) => {
    console.log(data);
  };

  const onQuestionRadioBtnChange = () => {
    if (isLastStep) {
      handleSubmit(onTestFormSubmit)();
    } else {
      incrementCurrentStep();
    }
  };

  return (
    <Form>
      {questions.map(({ answers, title, name }, index) => {
        const shouldShowQuestion = index <= currentStep;

        return (
          shouldShowQuestion && (
            <Question
              answers={answers}
              title={title}
              key={name}
              zIndex={index}
              settings={register(name, { required: true })}
              onChange={onQuestionRadioBtnChange}
            />
          )
        );
      })}
    </Form>
  );
};

export default TestForm;
