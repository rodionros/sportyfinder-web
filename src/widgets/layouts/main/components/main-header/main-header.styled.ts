import Image from 'next/image';
import styled from '@emotion/styled';
import menuBtnWhite from 'public/static/images/menu-white.svg';
import themeBtnWhite from 'public/static/images/theme-white.svg';

import { IconButton } from '@/shared/components/icon-button/icon-button.styled';
import { StyledList } from '@/shared/components/styled-list/styled-list.styled';
import { TagWrapper } from '@/shared/components/tag-wrapper/tag-wrapper.styled';
import { variants } from '@/shared/design/tokens/typography';

export const Header = styled.header({
  width: '100%',
  maxWidth: '1240px',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  zIndex: '2',
  margin: '40px auto 0',

  '@media (max-width: 768px)': {
    maxWidth: '578px',
  },

  '@media (max-width: 650px)': {
    maxWidth: '343px',
    backgroundColor: '#2a2b30',
    borderRadius: '16px',
    padding: '16px',
    justifyContent: 'space-between',
  },
});

export const HeaderLogo = styled(Image)({
  width: 'auto',
  maxWidth: '85px',
  height: 'auto',

  '@media (max-width: 768px)': {
    maxWidth: '68px',
  },

  '@media (max-width: 650px)': {
    maxWidth: '49px',
  },
});

export const StyledContainer = styled.div({
  width: '100%',
  maxWidth: 'max-content',
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  backgroundColor: '#2a2b30',
  borderRadius: '16px',
  padding: '16px',
  margin: '0 auto',

  '@media (max-width: 375px)': {
    maxWidth: '80px',
    gap: '8px',
    backgroundColor: 'transparent',
    margin: '0',
    padding: '0',
  },
});

export const HeaderNavDesktop = styled.nav({
  '@media (max-width: 375px)': {
    display: 'none',
  },
});

export const HeaderListItem = styled(TagWrapper)({
  ...variants.s_adaptive,
  width: '100%',
  maxWidth: 'max-content',
  '&:last-of-type': {
    color: '#fff',
    backgroundColor: '#833fdc',
  },
});

export const ThemeButton = styled(IconButton)({
  backgroundImage: `url(${themeBtnWhite.src})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const MenuButton = styled(IconButton)({
  backgroundImage: `url(${menuBtnWhite.src})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const MobileMenu = styled.div({
  width: '100%',
  maxWidth: '343px',
  position: 'absolute',
  top: '76px',
  left: '0',
  backgroundColor: '#2A2B30',
  borderRadius: '16px',
  padding: '16px',
});

export const MobileList = styled(StyledList)({
  width: '100%',
  display: 'grid',
  gap: '8px',
  gridTemplateColumns: 'repeat(2, 1fr)',
});

export const MobileListItem = styled(HeaderListItem)({
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  '&:last-of-type': {
    gridColumn: '1 / 3',
  },
});
