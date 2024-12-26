import styled from '@emotion/styled';
import Sportyfinder from 'public/static/images/logo-desktop-white.svg';

import { StyledLink } from '@/shared/components/styled-link/styled-link.styled';
import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const Footer = styled.footer({
  width: '95%',
  maxWidth: '1240px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto 60px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '688px',
    justifyContent: 'start',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '196px',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
});

export const FooterLogo = styled(Sportyfinder)({
  width: '100%',
  maxWidth: '211px',
  marginRight: '372px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '185px',
    marginRight: '122px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    marginRight: '0',
    marginBottom: '32px',
  },
});

export const FooterLink = styled(StyledLink)<{ $lang?: boolean; is_email?: string }>((props) => ({
  ...variants.base_adaptive,
  color: props.is_email === 'true' ? '#833FDC' : '#fff',

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.base_mobile,
    fontSize: props.$lang ? '24px' : 'inherit',
  },
}));
