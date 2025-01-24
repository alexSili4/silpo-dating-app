import { FC } from 'react';
import { IProps } from './AppStep.types';
import { Container, Number, Title } from './AppStep.styled';

const AppStep: FC<IProps> = ({ desc, number }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Title>{desc}</Title>
    </Container>
  );
};

export default AppStep;
