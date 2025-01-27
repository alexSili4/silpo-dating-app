import styled from '@emotion/styled';
import { IStyledContainerProps } from './TestFormRadioBtns.types';
import { getFlexItemWidth } from '@/utils';
import { theme } from '@/constants';

const listGap = theme.spacing(5);

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  gap: ${listGap}px;

  & > * {
    width: calc(
      ${({ answers }) => getFlexItemWidth({ listLength: answers, listGap })}
    );
  }
`;
