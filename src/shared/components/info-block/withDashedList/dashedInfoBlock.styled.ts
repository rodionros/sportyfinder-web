import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const DashedItem = styled.li({
  ...variants.s,
  marginLeft: '-10px',
  '&::before': {
    content: '"—"',
    position: 'absolute',
    left: '0px',
  },

  '@media (max-width: 768px)': {
    ...variants.s_adaptive,
  },

  '@media (max-width: 375px)': {
    ...variants.s_mobile,
  },
});
