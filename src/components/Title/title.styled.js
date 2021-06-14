import styled from 'styled-components';

import media from '@styles/media';
import { H1 } from '@primitives/H';

const StyledTitle = styled(H1)`
  margin-top: 40px;
  text-align: center;
  font-weight: 600;
  color: #444;

  ${media['lg']`
    margin-top: 60px;
  `}
`;

export {
  StyledTitle,
};
