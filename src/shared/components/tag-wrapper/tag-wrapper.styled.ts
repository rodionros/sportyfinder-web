import styled from '@emotion/styled';

import { breakpoints } from '@/shared/design/media';

export const TagWrapper = styled.li<{ $header?: boolean }>((props) => ({
  color: '#2a2b30',
  backgroundColor: '#fff',
  borderRadius: '42px',
  padding: props.$header ? '8px 16px' : '16px 30px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    padding: props.$header ? '8px 16px' : '16px 30px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    padding: props.$header ? '8px 16px' : '14px 24px',
  },
}));
