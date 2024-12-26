import styled from '@emotion/styled';
import Logo from 'public/static/images/S-desktop-white.svg';
import Skateboard from 'public/static/images/sports-2.webp';

import { StyledImage } from '@/shared/components/styled-image/styled-image.styled';
import { StyledList } from '@/shared/components/styled-list/styled-list.styled';
import { breakpoints } from '@/shared/design/media';
import { variants } from '@/shared/design/tokens/typography';

interface BgProps {
  $bgColor: string;
}

export const SportsSection = styled.section({
  width: '100%',
  maxWidth: '1030px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(334px, 1fr))',
  gap: '20px',
  margin: '0 auto 180px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '688px',
    margin: '0 auto 120px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '343px',
    gridTemplateColumns: '343px',
    gridTemplateRows: 'repeat(2, 343px) 548px repeat(2, 343px)',
    gap: '10px',
    margin: '0 auto 120px',
  },
});

export const GridItemContainer = styled.div({
  width: '100%',
  maxWidth: '505px',
  borderRadius: '50px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '334px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '343px',
  },
});

export const GridItemBg = styled(GridItemContainer)((props: BgProps) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.$bgColor,
}));

export const LogoWrapper = styled.div({
  width: '100%',
  maxWidth: '185px',
  minHeight: '185px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50px',
  backgroundColor: '#833FDC',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '123px',
    minHeight: '123px',
    borderRadius: '25px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '126px',
    minHeight: '126px',
  },
});

export const LogoImage = styled(Logo)({
  width: '100%',
  maxWidth: '133px',
  minHeight: '87px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '89px',
    minHeight: '58px',
  },
});

export const ImageContainer = styled(StyledImage)({
  width: '100%',
  maxWidth: '505px',
  borderRadius: '50px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '334px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '343px',
  },
});

export const MiddleBlock = styled(GridItemContainer)({
  width: '100%',
  maxWidth: '1030px',
  display: 'flex',
  justifyContent: 'space-between',
  gridColumn: '1 / 3',
  backgroundImage: `url(${Skateboard.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '56px 85px 33px 105px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '688px',
    flexDirection: 'column',
    padding: '80px 100px 60px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    gridColumn: '1 / 2',
    maxWidth: '343px',
    justifyContent: 'start',
    flexDirection: 'column',
    padding: '84px 0',
    backgroundSize: 'cover',
  },
});

export const BlockDescription = styled.p({
  ...variants.base,
  width: '100%',
  maxWidth: '330px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    ...variants.base_adaptive,
    textAlign: 'center',
    margin: '0 auto',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    maxWidth: '215px',
    ...variants.base_mobile,
  },
});

export const TagsList = styled(StyledList)({
  width: '100%',
  maxWidth: '470px',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    marginTop: '48px',
  },

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    marginTop: '24px',
    gap: '8px',
  },
});

export const TagText = styled.p({
  ...variants.base_adaptive,

  [`@media (max-width:${breakpoints.mobile}px)`]: {
    ...variants.base_mobile,
  },
});

export const AppBlock = styled(GridItemBg)({
  flexDirection: 'column',
  gap: '18px',
  alignItems: 'center',
  textAlign: 'center',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    minHeight: '334px',
    gap: '16px',
    padding: '30px 0',
  },
});

export const AppList = styled(StyledList)({
  gap: '18px',
  flexDirection: 'column',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    gap: '8px',
  },
});

export const AppImage = styled(StyledImage)({
  maxWidth: '198px',

  [`@media (max-width:${breakpoints.tablet}px)`]: {
    maxWidth: '180px',
  },
});
