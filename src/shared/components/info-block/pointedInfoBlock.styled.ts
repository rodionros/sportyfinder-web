import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const InfoBlock = styled.li({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  textAlign: 'justify',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    gap: '20px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    gap: '16px',
  },
});

export const PointedItem = styled.li({
  ...variants.s,
  listStyleType: 'disc',
  marginLeft: '30px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.s_adaptive,
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.s_mobile,
  },
});
