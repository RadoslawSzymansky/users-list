import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  min-width: 300px;

  margin: 15px auto 35px;
  padding: 12px 15px;

  border: .2px solid ${({theme}) => theme.colors.primary};
  outline: none;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15);
  font-size: 16px;
`;

export {
  StyledInput
};
