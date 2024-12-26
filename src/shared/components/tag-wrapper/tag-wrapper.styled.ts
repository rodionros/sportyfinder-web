import styled from '@emotion/styled';

export const TagWrapper = styled.li<{ $header?: boolean }>((props) => ({
  color: '#2a2b30',
  backgroundColor: '#fff',
  borderRadius: '42px',
  padding: props.$header ? '8px 16px' : '16px 30px',

  '@media (max-width: 768px)': {
    padding: props.$header ? '8px 16px' : '16px 30px',
  },

  '@media (max-width: 375px)': {
    padding: props.$header ? '8px 16px' : '14px 24px',
  },
}));
