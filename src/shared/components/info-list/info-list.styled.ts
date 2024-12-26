import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const InfoList = styled.ul({
  ...variants.heading2,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  position: 'relative',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.heading2_adaptive,
    gap: '20px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.heading2_mobile,
    gap: '16px',
  },
});
