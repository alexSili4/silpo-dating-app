import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Title = styled.p`
  color: #1d165c;
  font-family: Silpo;
  font-size: 70px;
  font-weight: 900;
  line-height: 1.2;
  text-align: left;
  text-transform: uppercase;
`;

export const DecorativeLine = styled.div`
  width: 63px;
  height: 5px;
  border-radius: 1000px;
  background-color: #ffb4c6;
`;
