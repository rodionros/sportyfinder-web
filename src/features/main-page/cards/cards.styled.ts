import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';

export const CardsSection = styled.section({
  width: '95%',
  minHeight: '94vh',
  display: 'flex',
  gap: '150px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '180px auto 0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    marginTop: '90px',
    gap: '100px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    marginTop: '-35px',
    gap: '50px',
  },
});
