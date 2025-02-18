import { Answers } from '@/types/questions.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  answers: Answers;
  title: string;
  settings: object;
  onChange: InputChangeFunc;
}
