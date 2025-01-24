import { FC } from 'react';
import { IProps } from './Question.types';
import TestFormRadioBtns from '@TestPageComponents/TestFormRadioBtns';
import { Container, DecorativeLine, Title, TitleWrap } from './Question.styled';

const Question: FC<IProps> = ({ answers, title, settings, onChange }) => {
  return (
    <Container>
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
