import * as React from 'react';
import { useTranslation } from 'next-i18next';

import { FooterLayout } from '@/layouts/main/components/main-footer/footer-layout';

import { PrivacyData } from '@/features/privacy-page/privacy-data/privacy-data';

import { InfoSection } from '@/shared/components/info-section';
import { PageSEO } from '@/shared/lib/meta';
import { getTranslationsStaticProps } from '@/shared/lib/ssr';
import { EnhancedNextPage } from '@/shared/types/enhanced-next-page';
import { SSGPageProps } from '@/shared/types/ssg-page-props';

type IndexPageProps = SSGPageProps;

export const getStaticProps = getTranslationsStaticProps(['privacy', 'common']);

const PrivacyPage: EnhancedNextPage<IndexPageProps> = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <PageSEO title={t('SEO_TITLE')} description={t('SEO_DESCRIPTION')} />

      <InfoSection heading={t('PRIVACY_TITLE')}>
        <PrivacyData />
      </InfoSection>
    </>
  );
};

PrivacyPage.Layout = FooterLayout;

export default PrivacyPage;
