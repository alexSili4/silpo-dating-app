import { Questions } from '@/types/questions.types';
import { Func } from '@/types/types';

export interface IProps {
  questions: Questions;
  currentStep: number;
  isLastStep: boolean;
  incrementCurrentStep: Func;
}
