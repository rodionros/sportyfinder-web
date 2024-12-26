import * as React from 'react';
import { useTranslation } from 'next-i18next';

import { Heading, SloganSection, Text } from '@/features/main-page/slogan/slogan.styled';

export const Slogan = () => {
  const { t } = useTranslation('index');

  return (
    <SloganSection id="about">
      <Heading>{t('SLOGAN_TITLE')}</Heading>
      <Text>{t('SLOGAN_SUBTITLE')}</Text>
    </SloganSection>
  );
};
