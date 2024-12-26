import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const Description = styled.p({
  ...variants.s,

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.s_adaptive,
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.s_mobile,
  },
});
