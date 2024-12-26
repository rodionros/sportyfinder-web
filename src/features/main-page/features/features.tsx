import * as React from 'react';
import { StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';
import feature1 from 'public/static/images/feature-1.png';
import feature2 from 'public/static/images/feature-2.png';
import feature3 from 'public/static/images/feature-3.png';
import feature4 from 'public/static/images/feature-4.png';

import {
  FeaturesHeading,
  FeaturesList,
  FeaturesListItem,
  FeaturesSection,
  FeatureText,
  StyledFeaturesImage,
} from '@/features/main-page/features/features.styled';

type TFeaturesItem = {
  text: string;
  src?: StaticImageData;
  id: number;
};

const features: TFeaturesItem[] = [
  {
    text: 'FEATURES_1',
    id: 1,
  },
  {
    text: 'FEATURES_2',
    src: feature1,
    id: 2,
  },
  {
    text: 'FEATURES_3',
    id: 3,
  },
  {
    text: 'FEATURES_4',
    src: feature2,
    id: 4,
  },
  {
    text: 'FEATURES_5',
    id: 5,
  },
  {
    text: 'FEATURES_6',
    id: 6,
  },
  {
    text: 'FEATURES_7',
    id: 7,
  },
  {
    text: 'FEATURES_8',
    src: feature3,
    id: 8,
  },
  {
    text: 'FEATURES_9',
    src: feature4,
    id: 9,
  },
];

export const Features = () => {
  const { t } = useTranslation('index');

  return (
    <FeaturesSection>
      <FeaturesHeading>{t('FEATURES_TITLE')}</FeaturesHeading>

      <FeaturesList>
        {features.map((feature) => {
          if (feature.src) {
            return (
              <FeaturesListItem key={feature.id}>
                <StyledFeaturesImage src={feature.src} alt={t(feature.text)} />
              </FeaturesListItem>
            );
          } else {
            return (
              <FeaturesListItem key={feature.id} $features>
                <FeatureText>{t(feature.text)}</FeatureText>
              </FeaturesListItem>
            );
          }
        })}
      </FeaturesList>
    </FeaturesSection>
  );
};
