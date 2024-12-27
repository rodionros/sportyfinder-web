import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const CardWrapper = styled.div({
  width: '100%',
  maxWidth: '1070px',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'sticky',
  top: '0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '710px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    height: '100vh',
    maxWidth: '343px',
  },
});

export const CardContainer = styled(motion.div)({
  width: '100%',
  minHeight: '531px',
  display: 'flex',
  position: 'relative',
  backgroundColor: '#2A2B30',
  borderRadius: '50px',
  overflow: 'hidden',
  margin: '0 auto',

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    flexDirection: 'column',
    minHeight: '413px',
  },
});

export const CardImage = styled.img({
  width: 'auto',
  height: 'auto',
  objectFit: 'cover',

  [`@media (max-width:${breakpoints.mobile}px)`]: {},
});

export const CardInfo = styled.div<{ textLocation: string }>((props) => ({
  ...variants.base,
  width: '100%',
  maxWidth: '400px',
  position: 'absolute',
  inset: props.textLocation === 'right' ? '100px 100px auto auto' : '100px auto auto 100px',
  zIndex: '2',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.base_adaptive,
    maxWidth: '267px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.base_mobile,
    maxWidth: '220px',
    textAlign: 'center',
    inset: '64px 62px',
  },
}));
