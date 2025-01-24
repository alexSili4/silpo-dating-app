import { FC } from 'react';
import { Container, Image, Input, Label, Title } from './CustomRadioBtn.styled';
import { IProps } from './CustomRadioBtn.types';

const CustomRadioBtn: FC<IProps> = ({ image, title, settings, onChange }) => {
  return (
    <Label>
      <Input {...settings} onChange={onChange} type='radio' value={title} />
      <Container>
        <Image src={image} />
        <Title>{title}</Title>
      </Container>
    </Label>
  );
};

export default CustomRadioBtn;
