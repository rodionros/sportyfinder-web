import * as React from 'react';
import { useTranslation } from 'next-i18next';
import AppGallery from 'public/static/images/AppGallery.png';
import AppStore from 'public/static/images/AppStore.png';
import GooglePlay from 'public/static/images/GooglePlay.png';
import logo from 'public/static/images/S-desktop-white.svg';
import skateboard1 from 'public/static/images/sports-1.png';
import basketball from 'public/static/images/sports-3.png';

import {
  AppBlock,
  AppImage,
  AppList,
  BlockDescription,
  GridItemBg,
  ImageContainer,
  LogoImage,
  LogoWrapper,
  MiddleBlock,
  SportsSection,
  TagsList,
  TagText,
} from '@/features/main-page/sports/sports.styled';

import { StyledLink } from '@/shared/components/styled-link/styled-link.styled';
import { TagWrapper } from '@/shared/components/tag-wrapper/tag-wrapper.styled';

type TTag = {
  name: string;
  id: number;
};

const sportsTags: TTag[] = [
  {
    name: 'SPORTS_1',
    id: 1,
  },
  {
    name: 'SPORTS_2',
    id: 2,
  },
  {
    name: 'SPORTS_3',
    id: 3,
  },
  {
    name: 'SPORTS_4',
    id: 4,
  },
  {
    name: 'SPORTS_5',
    id: 5,
  },
  {
    name: 'SPORTS_6',
    id: 6,
  },
  {
    name: 'SPORTS_7',
    id: 7,
  },
  {
    name: 'SPORTS_8',
    id: 8,
  },
  {
    name: 'SPORTS_9',
    id: 9,
  },
  {
    name: 'SPORTS_10',
    id: 10,
  },
  {
    name: 'SPORTS_11',
    id: 11,
  },
  {
    name: 'SPORTS_12',
    id: 12,
  },
  {
    name: 'SPORTS_13',
    id: 13,
  },
  {
    name: 'SPORTS_14',
    id: 14,
  },
  {
    name: 'SPORTS_15',
    id: 15,
  },
  {
    name: 'SPORTS_16',
    id: 16,
  },
];

export const Sports = () => {
  const { t } = useTranslation('index');

  return (
    <SportsSection id="app">
      <GridItemBg $bgColor="#2A2B30">
        <LogoWrapper>
          <LogoImage src={logo} alt="Sportyfinder" />
        </LogoWrapper>
      </GridItemBg>
      <ImageContainer src={skateboard1} alt="Скейтбордист" />
      <MiddleBlock>
        <BlockDescription>{t('SPORTS_TITLE')}</BlockDescription>
        <TagsList>
          {sportsTags.map((tag) => {
            return (
              <TagWrapper key={tag.id}>
                <TagText>{t(tag.name)}</TagText>
              </TagWrapper>
            );
          })}
        </TagsList>
      </MiddleBlock>
      <ImageContainer src={basketball} alt="Баскетболист" />
      <AppBlock $bgColor="#833FDC">
        <BlockDescription>{t('SPORTS_SUBTITLE')}</BlockDescription>
        <AppList>
          <li>
            <StyledLink href="">
              <AppImage src={AppStore} alt="AppStore" />
            </StyledLink>
          </li>
          <li>
            <AppImage src={GooglePlay} alt="GooglePlay" />
          </li>
          <li>
            <AppImage src={AppGallery} alt="AppGallery" />
          </li>
        </AppList>
      </AppBlock>
    </SportsSection>
  );
};
