import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const SloganSection = styled.section({
  width: '100%',
  maxWidth: '717px',
  textAlign: 'center',
  margin: '64px auto 0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '573px',
    margin: '30px auto 0',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '287px',
    margin: '125px auto 0',
  },
});

export const Heading = styled.h2({
  ...variants.title1,
  width: '100%',
  marginBottom: '24px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.title1_adaptive,
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.title1_mobile,
    marginBottom: '16px',
  },
});

export const Text = styled.p({
  ...variants.base,
  width: '100%',
  maxWidth: '505px',
  margin: '0 auto',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.base_adaptive,
    maxWidth: '379px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.base_mobile,
    maxWidth: '251px',
  },
});
