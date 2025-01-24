import { ChangeEvent } from 'react';

// events
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// functions
export type Func = () => void;

export type InputChangeFunc = (e: InputChangeEvent) => void;

// other
export type Strings = string[];

export type AnyElements = any[];
