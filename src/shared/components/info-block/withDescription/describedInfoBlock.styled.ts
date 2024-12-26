import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const Description = styled.p({
  ...variants.s,

  '@media (max-width: 768px)': {
    ...variants.s_adaptive,
  },

  '@media (max-width: 375px)': {
    ...variants.s_mobile,
  },
});
