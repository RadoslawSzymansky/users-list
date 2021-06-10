import { FC } from 'react';

import { StyledInput } from './searchInput.styled';

type Props = {
  placeholder?: string
};

const SearchInput: FC<Props> = ({ placeholder }) => {
  return (
    <StyledInput type="text" placeholder={placeholder} />
  )
};

export default SearchInput;
