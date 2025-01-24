import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledContainerProps } from './AnimatedQuestion.types';

export const Container = styled(motion.div)<IStyledContainerProps>`
  position: ${({ isFirstQuestion }) =>
    isFirstQuestion ? 'static' : 'absolute'};
  z-index: ${({ zIndex }) => zIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
`;
