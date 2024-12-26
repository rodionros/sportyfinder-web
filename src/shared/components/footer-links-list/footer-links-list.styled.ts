import styled from '@emotion/styled';

import { StyledList } from '@/shared/components/styled-list/styled-list.styled';

export const FooterLinksList = styled(StyledList)<{
  $row?: boolean;
  $icons?: boolean;
  $lang?: boolean;
  $contacts?: boolean;
}>((props) => ({
  '@media (max-width: 768px)': {
    margin: props.$contacts ? '18px auto 0' : props.$lang ? '0 189px 0 0' : '0',
    '&:nth-of-type(3)': {
      order: '2',
    },
    '&:nth-of-type(2)': {
      order: '3',
    },
  },

  '@media (max-width: 375px)': {
    gap: props.$icons ? '24px' : '8px',
    margin: '0',
    marginBottom: props.$lang ? '8px' : props.$contacts ? '32px' : '0',
    display: 'flex',
    flexDirection: props.$row ? 'row' : 'column',
    '&:nth-of-type(3)': {
      order: '3',
    },
    '&:nth-of-type(2)': {
      order: '2',
    },
  },
}));
