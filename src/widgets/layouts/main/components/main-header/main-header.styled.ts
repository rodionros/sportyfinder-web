import styled from '@emotion/styled';
import Logo from 'public/static/images/S-desktop-white.svg';

import { StyledList } from '@/shared/components/styled-list/styled-list.styled';
import { TagWrapper } from '@/shared/components/tag-wrapper/tag-wrapper.styled';
import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const Header = styled.header({
  width: '95%',
  maxWidth: '1240px',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  overflow: 'hidden',
  margin: '40px auto 0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '578px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '500px',
    backgroundColor: '#2a2b30',
    borderRadius: '16px',
    padding: '16px',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
});

export const HeaderLogo = styled(Logo)({
  width: '85px',
  height: '56px',
  marginRight: '25%',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    width: '68px',
    height: '45px',
    marginRight: '42px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    width: '49px',
    height: '33px',
    marginRight: '42px',
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
  margin: '0',

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '80px',
    gap: '8px',
    backgroundColor: 'transparent',
    margin: '0',
    padding: '0',
  },
});

export const HeaderNavDesktop = styled.nav({
  [`@media (max-width:${breakpoints.mobile}px)`]: {
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

export const MobileMenu = styled.div({
  width: '100%',
  maxWidth: '500px',
  position: 'absolute',
  top: '76px',
  left: '0',
  backgroundColor: '#2A2B30',
  borderRadius: '16px',
  padding: '16px',
  zIndex: '10',
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
