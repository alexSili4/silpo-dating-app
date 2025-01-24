import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  height: 100%;
  border-radius: 15px;
  background-color: #ffb4c6;
  padding: ${({ theme: { spacing } }) => `${spacing(6)}px ${spacing(3)}px`};
`;

export const Number = styled.p`
  color: #1d165c;
  font-family: Silpo Text Variable;
  font-size: 53px;
  font-weight: 700;
  line-height: 1.51;
`;

export const Title = styled.p`
  color: #1d165c;
  font-family: Silpo Text Variable;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;
