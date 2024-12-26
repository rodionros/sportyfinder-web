import styled from '@emotion/styled';

import { variants } from '@/shared/design/tokens/typography';

export const ButtonListItem = styled.li({
  position: 'relative',
});

export const LocaleButton = styled.button({
  ...variants.base_adaptive,
  border: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
});

export const LocaleButtonSlash = styled(LocaleButton)({
  '&::before': {
    content: '""',
    width: '1px',
    minHeight: '22px',
    display: 'block',
    position: 'absolute',
    top: '2px',
    left: '-8px',
    backgroundColor: '#5E6168',
  },
});
