import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(29)}px;
  padding-bottom: ${({ theme }) => theme.spacing(18)}px;
  background-image: radial-gradient(
    69.53% 48.1% at 50% 50%,
    #fee4c8,
    #ffcbde 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)}px;
  min-height: 100%;
  padding-left: ${({ theme }) => theme.spacing(25)}px;
  padding-right: ${({ theme }) => theme.spacing(25)}px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(14)}px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Title = styled.h1`
  color: #24207c;
  font-family: Silpo;
  font-size: 100px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  width: 705px;
  color: #24207c;
  font-family: Silpo Text Variable;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;
`;

export const AuthLink = styled.a`
  min-width: 411px;
  padding: ${({ theme: { spacing } }) => `${spacing(5)}px ${spacing(11)}px`};
  border-radius: 11px;
  background-color: #24207c;
  color: rgb(255, 255, 255);
  font-family: Silpo Rounded;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  text-align: center;
`;
