import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import MenuBtnWhite from 'public/static/images/menu-white.svg';
import ThemeBtnWhite from 'public/static/images/theme-white.svg';

import {
  Header,
  HeaderListItem,
  HeaderLogo,
  HeaderNavDesktop,
  MobileList,
  MobileListItem,
  MobileMenu,
  StyledContainer,
} from '@/layouts/main/components/main-header/main-header.styled';

import { IconButton } from '@/shared/components/icon-button/icon-button.styled';
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
      <HeaderLogo />

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

        <IconButton type="button" onClick={handleThemeButtonClick}>
          <ThemeBtnWhite />
        </IconButton>
        {isMobile ? (
          <IconButton type="button" onClick={handleMenuButtonClick}>
            <MenuBtnWhite />
          </IconButton>
        ) : null}
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
