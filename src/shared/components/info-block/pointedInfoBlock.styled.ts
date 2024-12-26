import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const InfoBlock = styled.li({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  textAlign: 'justify',

  '@media (max-width: 768px)': {
    gap: '20px',
  },

  '@media (max-width: 375px)': {
    gap: '16px',
  },
});

export const PointedItem = styled.li({
  ...variants.s,
  listStyleType: 'disc',
  marginLeft: '30px',

  '@media (max-width: 768px)': {
    ...variants.s_adaptive,
  },

  '@media (max-width: 375px)': {
    ...variants.s_mobile,
  },
});
