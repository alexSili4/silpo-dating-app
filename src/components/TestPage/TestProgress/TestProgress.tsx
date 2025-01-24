import { FC } from 'react';
import { IProps } from './TestProgress.types';
import Heart from '@/icons/heart.svg?react';
import { Container, List, ListItem, IconWrap } from './TestProgress.styled';

const TestProgress: FC<IProps> = ({ questions, currentStep }) => {
  const zIndex = questions.length;

  return (
    <Container zIndex={zIndex}>
      <List>
        {questions.map((_, index) => {
          const isCompletedStep = index <= currentStep;

          return (
            <ListItem key={index}>
              <IconWrap isCompletedStep={isCompletedStep}>
                <Heart />
              </IconWrap>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default TestProgress;
