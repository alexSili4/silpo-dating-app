import { FC } from 'react';
import { IProps } from './Question.types';
import TestFormRadioBtns from '@TestPageComponents/TestFormRadioBtns';
import { Container, DecorativeLine, Title, TitleWrap } from './Question.styled';

const Question: FC<IProps> = ({
  answers,
  title,
  zIndex,
  settings,
  onChange,
}) => {
  return (
    <Container zIndex={zIndex}>
      <TitleWrap>
        <Title>{title}</Title>
        <DecorativeLine></DecorativeLine>
      </TitleWrap>
      <TestFormRadioBtns
        answers={answers}
        settings={settings}
        onChange={onChange}
      />
    </Container>
  );
};

export default Question;
