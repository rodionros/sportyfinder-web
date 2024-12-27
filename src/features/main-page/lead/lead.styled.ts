import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';

export const LeadSection = styled.section({
  width: '100%',
  maxWidth: '1150px',
  minHeight: '890px',
  position: 'relative',
  margin: '0 auto',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    minHeight: '760px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    minHeight: '527px',
    overflow: 'hidden',
  },
});

export const StyledLeadImage = styled.img({
  width: 'auto',
  height: 'auto',
  minHeight: '890px',
  position: 'absolute',
  top: '340px',
  left: '48%',
  transform: 'translate(-50%, -50%)',
  objectFit: 'contain',
  objectPosition: 'top',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    minHeight: '600px',
    top: '295px',
    left: '48%',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    minHeight: '527px',
    objectFit: 'cover',
    top: '270px',
  },
});
