import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 15px;
  background-color: black;
  border-radius: 10px;
  &:hover {
    background-color: ${lighten(0.1, 'black')};
  }
`;
