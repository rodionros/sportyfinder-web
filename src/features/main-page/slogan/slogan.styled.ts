import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const SloganSection = styled.section({
  width: '100%',
  maxWidth: '717px',
  textAlign: 'center',
  margin: '50px auto 0',

  '@media (max-width: 768px)': {
    maxWidth: '573px',
    margin: '30px auto 0',
  },

  '@media (max-width: 375px)': {
    maxWidth: '287px',
    margin: '120px auto 0',
  },
});

export const Heading = styled.h2({
  ...variants.title1,
  width: '100%',
  marginBottom: '24px',

  '@media (max-width: 768px)': {
    ...variants.title1_adaptive,
  },

  '@media (max-width: 375px)': {
    ...variants.title1_mobile,
  },
});

export const Text = styled.p({
  ...variants.base,
  width: '100%',
  maxWidth: '505px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    ...variants.base_adaptive,
  },

  '@media (max-width: 375px)': {
    ...variants.base_mobile,
    maxWidth: '251px',
  },
});
