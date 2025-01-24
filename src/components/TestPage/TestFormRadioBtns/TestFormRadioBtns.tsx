import { FC } from 'react';
import { IProps } from './TestFormRadioBtns.types';
import CustomRadioBtn from '@TestPageComponents/CustomRadioBtn';
import { Container } from './TestFormRadioBtns.styled';

const TestFormRadioBtns: FC<IProps> = ({ answers, settings, onChange }) => {
  return (
    <Container>
      {answers.map(({ image, title }, index) => (
        <CustomRadioBtn
          key={index}
          image={image}
          title={title}
          settings={settings}
          onChange={onChange}
        />
      ))}
    </Container>
  );
};

export default TestFormRadioBtns;
