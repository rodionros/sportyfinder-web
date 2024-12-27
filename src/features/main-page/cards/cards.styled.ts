import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';

export const CardsSection = styled.section({
  width: '95%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '-110px auto 0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    marginTop: '90px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    marginTop: '-90px',
  },
});
