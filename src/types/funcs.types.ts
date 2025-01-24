import { AnyElements } from './types';

export interface IGetFlexItemWidthProps {
  listLength: number;
  listGap: number;
}

export interface IGetIsLastIndexProps {
  array: AnyElements;
  currentIndex: number;
}

export interface IGetIsLastIndex {
  isLastIndex: boolean;
}
