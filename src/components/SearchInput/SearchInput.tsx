import { FC } from 'react';

import { StyledInput } from './searchInput.styled';

type Props = {
  placeholder?: string,
  value: string,
  handleChange: (value: string) => string
};

const SearchInput: FC<Props> = ({ placeholder, value, handleChange }) => {
  return (
    <StyledInput
      data-testid="search-input"
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
};

export default SearchInput;
