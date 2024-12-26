import Link from 'next/link';
import { Box } from '@effable/react';
import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const Footer = styled.footer({
  width: '95%',
  maxWidth: '1240px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto 60px',

  '@media (max-width: 768px)': {
    maxWidth: '688px',
    justifyContent: 'start',
  },

  '@media (max-width: 375px)': {
    maxWidth: '196px',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
});

export const FooterLogo = styled(Box)({
  width: '100%',
  maxWidth: '211px',
  marginRight: '372px',

  '@media (max-width: 768px)': {
    maxWidth: '185px',
    marginRight: '122px',
  },

  '@media (max-width: 375px)': {
    marginRight: '0',
    marginBottom: '32px',
  },
});

export const FooterLink = styled(Link)<{ $email?: boolean; $lang?: boolean }>((props) => ({
  ...variants.base_adaptive,
  color: props.$email ? '#833FDC' : '#fff',

  '@media (max-width: 375px)': {
    ...variants.base_mobile,
    fontSize: props.$lang ? '24px' : 'inherit',
  },
}));

export const FooterIcon = styled(Box)({
  width: '100%',
  maxWidth: '39px',

  '@media (max-width: 375px)': {
    maxWidth: '44px',
  },
});
