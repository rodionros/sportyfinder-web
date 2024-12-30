import Image from 'next/image';
import styled from '@emotion/styled';

import { StyledList } from '@/shared/components/styled-list/styled-list.styled';
import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const FeaturesSection = styled.section({
  width: '95%',
  maxWidth: '1256px',
  margin: '90px auto 220px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '688px',
    margin: '150px auto 180px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '343px',
    margin: ' 0 auto 120px',
  },
});

export const FeaturesHeading = styled.h2({
  width: '100%',
  maxWidth: '393px',
  ...variants.heading1,
  marginBottom: '60px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '295px',
    ...variants.heading1_adaptive,
    marginBottom: '24px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '148px',
    ...variants.heading1_mobile,
  },
});

export const FeaturesList = styled(StyledList)({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
});

export const FeaturesListItem = styled.li<{ $features?: boolean }>((props) => ({
  color: '#fff',
  backgroundColor: 'transparent',
  border: props.$features ? '2px solid #833FDC' : 'none',
  borderRadius: '42px',
  padding: props.$features ? '26px 40px' : 'none',

  '&:last-child': {
    display: 'none',
  },

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    padding: props.$features ? '16px 30px' : 'none',

    '&:nth-last-of-type(-n+2)': {
      display: 'none',
    },
    '&:nth-of-type(2)': {
      maxWidth: '67px',
    },
    '&:nth-of-type(4)': {
      maxWidth: '185px',
    },
    '&:nth-of-type(5)': {
      order: '3',
    },
    '&:nth-of-type(3)': {
      order: '5',
    },
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    padding: props.$features ? '14px 24px' : 'none',

    '&:nth-last-of-type(-n+2)': {
      display: 'list-item',
    },
    '&:nth-of-type(2)': {
      maxWidth: '141px',
    },
    '&:nth-of-type(4)': {
      maxWidth: '109px',
    },
  },
}));

export const StyledFeaturesImage = styled(Image)({
  width: 'auto',
  height: '84px',
  borderRadius: '51px',
  objectFit: 'cover',
  objectPosition: 'center',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    height: '56px',
    borderRadius: '42px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    height: '44px',
    borderRadius: '42px',
  },
});

export const FeatureText = styled.p({
  ...variants.base,
  lineHeight: '1',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.base_adaptive,
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.base_mobile,
  },
});
