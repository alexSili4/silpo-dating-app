export interface IAnswer {
  title: string;
  image: string;
}

export type Answers = IAnswer[];

export interface IQuestion {
  title: string;
  name: string;
  answers: Answers;
}

export type Questions = IQuestion[];
