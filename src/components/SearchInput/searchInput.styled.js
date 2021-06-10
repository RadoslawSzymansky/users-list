import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  margin: 15px 0;
  padding: 12px 15px;

  border: 2px solid ${({theme}) => theme.colors.primary};
  outline: none;
`;

export {
  StyledInput
};
