import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(29)}px;
  padding-bottom: ${({ theme }) => theme.spacing(18)}px;
  background-color: greenyellow;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;
