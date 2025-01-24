import { FC } from 'react';
import { IProps } from './TestForm.types';
import { Form } from './TestForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputChangeEvent, IStrings } from '@/types/types';
import AnimatedQuestion from '@AnimationBlocks/AnimatedQuestion';

const TestForm: FC<IProps> = ({
  questions,
  currentStep,
  isLastStep,
  incrementCurrentStep,
}) => {
  const { register, handleSubmit, setValue } = useForm<IStrings>();

  const handleTestFormSubmit: SubmitHandler<IStrings> = async (data) => {
    console.log(data);
  };

  const onQuestionRadioBtnChange = (e: InputChangeEvent) => {
    const { name, value } = e.currentTarget;
    setValue(name, value);

    if (!isLastStep) {
      incrementCurrentStep();
    } else {
      handleSubmit(handleTestFormSubmit)();
    }
  };

  return (
    <Form>
      {questions.map(({ answers, title, name }, index) => {
        const shouldShowQuestion = index <= currentStep;
        const isFirstQuestion = index === 0;

        return (
          <AnimatedQuestion
            shouldShow={shouldShowQuestion}
            answers={answers}
            title={title}
            key={name}
            zIndex={index}
            isFirstQuestion={isFirstQuestion}
            settings={register(name, { required: true })}
            onChange={onQuestionRadioBtnChange}
          />
        );
      })}
    </Form>
  );
};

export default TestForm;
