import styled from 'styled-components';

import media from '../../styles/media';
import { H1 } from '../../primitives/H';

const StyledTitle = styled(H1)`
  margin-top: 40px;

  ${media['lg']`
    margin-top: 100px;
  `}
`;

export {
  StyledTitle,
};
