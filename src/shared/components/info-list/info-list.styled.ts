import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const InfoList = styled.ul({
  ...variants.heading2,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  position: 'relative',

  '@media (max-width: 768px)': {
    ...variants.heading2_adaptive,
    gap: '20px',
  },

  '@media (max-width: 375px)': {
    ...variants.heading2_mobile,
    gap: '16px',
  },
});
