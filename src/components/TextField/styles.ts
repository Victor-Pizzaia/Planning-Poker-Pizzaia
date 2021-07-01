import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--green);
`;

export const TextField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #707070;
  margin: 5px;

  &:focus {
    outline: none;
  }
`;
