import Question from '@TestPageComponents/Question';
import { FC } from 'react';
import { IProps } from './AnimatedQuestion.types';
import { AnimatePresence } from 'framer-motion';
import { Container } from './AnimatedQuestion.styled';

const AnimatedQuestion: FC<IProps> = ({
  answers,
  title,
  zIndex,
  isFirstQuestion,
  onChange,
  settings,
  shouldShow,
}) => {
  return (
    <AnimatePresence mode='popLayout'>
      {shouldShow && (
        <Container
          zIndex={zIndex}
          isFirstQuestion={isFirstQuestion}
          animate={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ type: 'spring' }}
          layout
        >
          <Question
            answers={answers}
            title={title}
            settings={settings}
            onChange={onChange}
          />
        </Container>
      )}
    </AnimatePresence>
  );
};

export default AnimatedQuestion;
