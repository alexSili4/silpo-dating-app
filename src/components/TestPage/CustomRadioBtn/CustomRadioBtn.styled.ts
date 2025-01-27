import styled from '@emotion/styled';

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;

export const Container = styled.span`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)}px;
  align-items: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 15px;
  background-color: #f2f2f2;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  label:has(input:is(:hover, :focus)) > & {
    background-color: #ef81ae;
  }
`;

export const ImgWrap = styled.div`
  flex-shrink: 0;
  width: 284px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img``;

export const Title = styled.span`
  color: #1d165c;
  font-family: Silpo Text;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.5;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  label:has(input:is(:hover, :focus)) > span > & {
    color: ${({ theme }) => theme.colors.white};
  }
`;
