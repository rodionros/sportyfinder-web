import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

export const CardWrapper = styled.div({
  width: '100%',
  maxWidth: '1030px',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'sticky',
  top: '0',
  margin: '220px auto 0',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '688px',
    marginTop: '180px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    height: '100vh',
    maxWidth: '343px',
    marginTop: '150px',
  },
});

export const CardContainer = styled(motion.div)({
  width: '100%',
  minHeight: '531px',
  display: 'flex',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: '#2A2B30',
  borderRadius: '50px',
  overflow: 'hidden',
  margin: '0 auto',

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    minHeight: '413px',
    padding: '64px 62px 0',
  },
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
    minHeight: '413px',
    position: 'static',
    textAlign: 'center',
  },
}));
