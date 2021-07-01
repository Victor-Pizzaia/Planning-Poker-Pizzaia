import styled, { css } from 'styled-components';

export const TitleSpan = styled.span`
  font-size: 5.1rem;
  font-weight: bold;
  font-style: normal;
  color: #707070;

  ${({ color }) =>
    color === 'green' &&
    css`
      color: var(--green);
      font-style: italic;
    `}
`;

export const TitleWrapper = styled.div``;

export const CenterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-size: cover;
`;

export const Img = styled.img`
  width: 600px;
  height: 500px;
`;

export const Wrapper = styled.form`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 22px;
  background-color: #ffffff;
  box-shadow: -15px 11px 40px #00000029;
  padding: 45px;
`;

export const Span = styled.span`
  font-size: 2.6rem;
  color: var(--green);
  font-weight: 600;
`;

export const TextContainer = styled.div`
  width: 85%;
  > * {
    margin: 35px 0;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: #707070;
`;

export const LinkSpan = styled.span`
  font-size: 14px;
  color: #707070;
`;

export const A = styled.a`
  color: var(--green);
`;
