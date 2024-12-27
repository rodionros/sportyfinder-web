import * as React from 'react';
import { useTranslation } from 'next-i18next';
import AppGallery from 'public/static/images/AppGallery.webp';
import AppStore from 'public/static/images/AppStore.webp';
import GooglePlay from 'public/static/images/GooglePlay.webp';
import skateboard1 from 'public/static/images/sports-1.webp';
import basketball from 'public/static/images/sports-3.webp';

import { sportsTags } from '@/features/main-page/sports/sports.const';
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

export const Sports = () => {
  const { t } = useTranslation('index');

  return (
    <SportsSection>
      <GridItemBg $bgColor="#2A2B30">
        <LogoWrapper>
          <LogoImage />
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
      <AppBlock $bgColor="#833FDC" id="app">
        <BlockDescription>{t('SPORTS_SUBTITLE')}</BlockDescription>
        <AppList>
          <li>
            <StyledLink href="">
              <AppImage src={AppStore} alt="AppStore" />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://play.google.com/store/apps/details?id=com.sportyfinder&pcampaignid=web_share">
              <AppImage src={GooglePlay} alt="GooglePlay" />
            </StyledLink>
          </li>
          {/* <li> */}
          {/*   <StyledLink href=""> */}
          {/*     <AppImage src={AppGallery} alt="AppGallery" /> */}
          {/*   </StyledLink> */}
          {/* </li> */}
        </AppList>
      </AppBlock>
    </SportsSection>
  );
};
