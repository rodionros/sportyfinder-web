import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Logo from 'public/static/images/S-desktop-white.svg';

import {
  Header,
  HeaderListItem,
  HeaderLogo,
  HeaderNavDesktop,
  MenuButton,
  MobileList,
  MobileListItem,
  MobileMenu,
  StyledContainer,
  ThemeButton,
} from '@/layouts/main/components/main-header/main-header.styled';

import { StyledLink } from '@/shared/components/styled-link/styled-link.styled';
import { StyledList } from '@/shared/components/styled-list/styled-list.styled';

interface HeaderProps {
  isMobile: boolean;
}

export const MainHeader = (props: HeaderProps) => {
  const { t } = useTranslation('common');
  const { isMobile } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleThemeButtonClick = () => {};
  const handleMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Header>
      <HeaderLogo src={Logo} unoptimized alt="Sportyfinder logo" />

      <StyledContainer>
        <HeaderNavDesktop>
          <StyledList>
            <HeaderListItem $header>
              <StyledLink href="#about">{t('HEADER_ABOUT')}</StyledLink>
            </HeaderListItem>
            <HeaderListItem $header>
              <StyledLink href="#how-it-works">{t('HEADER_HOW-IT-WORKS')}</StyledLink>
            </HeaderListItem>
            <HeaderListItem $header>
              <StyledLink href="#app">{t('HEADER_APP')}</StyledLink>
            </HeaderListItem>
          </StyledList>
        </HeaderNavDesktop>

        <ThemeButton type="button" onClick={handleThemeButtonClick} />
        {isMobile ? <MenuButton type="button" onClick={handleMenuButtonClick} /> : null}
      </StyledContainer>

      {isMobile && menuIsOpen && (
        <MobileMenu>
          <nav>
            <MobileList>
              <MobileListItem $header>
                <StyledLink href="#about">{t('HEADER_ABOUT')}</StyledLink>
              </MobileListItem>
              <MobileListItem $header>
                <StyledLink href="#how-it-works">{t('HEADER_HOW-IT-WORKS')}</StyledLink>
              </MobileListItem>
              <MobileListItem $header>
                <StyledLink href="#app">{t('HEADER_APP')}</StyledLink>
              </MobileListItem>
            </MobileList>
          </nav>
        </MobileMenu>
      )}
    </Header>
  );
};
