import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const DashedItem = styled.li({
  ...variants.s,
  marginLeft: '-10px',
  '&::before': {
    content: '"—"',
    position: 'absolute',
    left: '0px',
  },

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.s_adaptive,
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.s_mobile,
  },
});
