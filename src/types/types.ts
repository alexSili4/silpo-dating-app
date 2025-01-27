import { ChangeEvent } from 'react';

// events
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// functions
export type Func = () => void;

export type InputChangeFunc = (e: InputChangeEvent) => void;

// other
export type StringOrNull = string | null;

export type Strings = string[];

export interface IStrings {
  [key: string]: string;
}

export type AnyElements = any[];
