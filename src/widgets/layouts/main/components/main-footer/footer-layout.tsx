import * as React from 'react';
import { Box, SkipNavContent } from '@effable/react';

import { MainFooter } from './main-footer';

interface FooterLayoutProps {
  /**
   * The content
   */
  children?: React.ReactNode;
}

export const FooterLayout = (props: FooterLayoutProps) => {
  const { children } = props;

  return (
    <Box display="flex" width="100%" minHeight="100vh" flexDirection="column">
      <SkipNavContent />
      <main>{children}</main>

      <MainFooter />
    </Box>
  );
};
