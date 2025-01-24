import { InputChangeFunc } from '@/types/types';

export interface IProps {
  image: string;
  title: string;
  settings: object;
  onChange: InputChangeFunc;
}
