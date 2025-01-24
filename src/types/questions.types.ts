import { QuestionsKeys } from '@/constants';

export interface IAnswer {
  title: string;
  image: string;
}

export type Answers = IAnswer[];

export interface IQuestion {
  title: string;
  name: QuestionsKeys;
  answers: Answers;
}

export type Questions = IQuestion[];

export type QuestionsFormData = {
  [key in QuestionsKeys]: string;
};
