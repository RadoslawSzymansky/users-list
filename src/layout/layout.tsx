import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyle';

import theme from '@styles/theme';

type Props = {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Layout;
