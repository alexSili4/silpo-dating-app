import { Answers } from '@/types/questions.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  answers: Answers;
  title: string;
  zIndex: number;
  isFirstQuestion: boolean;
  shouldShow: boolean;
  settings: object;
  onChange: InputChangeFunc;
}

export interface IStyledContainerProps {
  zIndex: number;
  isFirstQuestion: boolean;
}
