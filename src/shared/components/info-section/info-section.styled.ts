import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const Info = styled.section({
  width: '95%',
  maxWidth: '1240px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  margin: '100px auto 180px',

  '@media (max-width: 768px)': {
    maxWidth: '688px',
    margin: '40px auto 120px',
    gap: '20px',
  },

  '@media (max-width: 375px)': {
    maxWidth: '343px',
    margin: '20px auto 100px',
    gap: '16px',
  },
});

export const InfoHeading = styled.h1({
  ...variants.heading1,
  marginBottom: '30px',

  '@media (max-width: 768px)': {
    ...variants.heading1_adaptive,
    marginBottom: '28px',
  },

  '@media (max-width: 375px)': {
    ...variants.heading1_mobile,
    marginBottom: '14px',
  },
});
