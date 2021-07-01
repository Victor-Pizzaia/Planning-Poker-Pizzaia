import styled from 'styled-components';

export const Button = styled.button`
  width: 170px;
  height: 46px;
  font-size: 1.6rem;
  color: #ffffff;
  background-color: var(--green);
  border-radius: 4px;
  border: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &::active {
  }
`;
