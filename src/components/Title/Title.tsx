import { FC } from 'react';
import { StyledTitle } from './title.styled';

type Props = {
  children: string,
}

const Title: FC<Props> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;
