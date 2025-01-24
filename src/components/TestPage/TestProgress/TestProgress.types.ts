import { Questions } from '@/types/questions.types';

export interface IProps {
  questions: Questions;
  currentStep: number;
}

export interface IStyledIconWrapProps {
  isCompletedStep: boolean;
}

export interface IStyledContainerProps {
  zIndex: number;
}
