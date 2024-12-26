import Image from 'next/image';
import styled from '@emotion/styled';

export const LeadSection = styled.section({
  width: '100%',
  '@media (max-width: 375px)': {
    overflow: 'hidden',
  },
});

export const StyledLeadImage = styled(Image)({
  width: 'auto',
  height: 'auto',
  display: 'block',
  position: 'relative',
  top: '-110px',
  margin: '0 auto',
  objectFit: 'cover',
  objectPosition: 'center',

  '@media (max-width: 768px)': {
    maxWidth: '768px',
  },

  '@media (max-width: 375px)': {
    maxWidth: '652px',
    minHeight: '527px',
    top: '0',
    left: '-40%',
  },
});
