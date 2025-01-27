import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledIconWrapProps,
} from './TestProgress.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex};
  bottom: 0;
  left: 0;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const ListItem = styled.li``;

export const IconWrap = styled.div<IStyledIconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    filter: grayscale(${({ isCompletedStep }) => (isCompletedStep ? 0 : 100)}%);
    opacity: ${({ isCompletedStep }) => (isCompletedStep ? 1 : 0.7)};
    transition: filter ${({ theme }) => theme.transitionDurationAndFunc},
      opacity ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
