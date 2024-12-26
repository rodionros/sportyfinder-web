import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { Box, SkipNavContent } from '@effable/react';

import { MainFooter } from '../main-footer';
import { MainHeader } from '../main-header';

interface MainLayoutProps {
  /**
   * The content
   */
  children?: React.ReactNode;
}

const MobileContext = createContext(false);
export const useMobile = () => useContext(MobileContext);

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      <Box display="flex" width="100%" minHeight="100vh" flexDirection="column">
        <MainHeader isMobile={isMobile} />

        <SkipNavContent />
        <main>{children}</main>

        <MainFooter />
      </Box>
    </MobileContext.Provider>
  );
};
