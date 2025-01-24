import { Answers } from '@/types/questions.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  answers: Answers;
  settings: object;
  onChange: InputChangeFunc;
}
