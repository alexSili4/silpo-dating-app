import { IGetIsLastIndexProps, IGetIsLastIndex } from '@/types/funcs.types';

const getIsLastIndex = ({
  array,
  currentIndex,
}: IGetIsLastIndexProps): IGetIsLastIndex => {
  const lastIndex = array.length - 1;
  const isLastIndex = lastIndex === currentIndex;

  return { isLastIndex };
};

export default getIsLastIndex;
