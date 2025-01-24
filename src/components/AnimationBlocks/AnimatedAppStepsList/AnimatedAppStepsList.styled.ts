import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledListItemProps } from './AnimatedAppStepsList.types';
import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';

const listGap = theme.spacing(6);

export const List = styled(motion.ul)`
  display: flex;
  gap: ${listGap}px;
`;

export const ListItem = styled(motion.li)<IStyledListItemProps>`
  width: calc(${({ listLength }) => getFlexItemWidth({ listLength, listGap })});
`;
