import * as React from 'react';
import { useTranslation } from 'next-i18next';

import { FooterLayout } from '@/layouts/main/components/main-footer/footer-layout';

import { AgreementData } from '@/features/agreement-page/agreement-data';

import { BoldedSpan } from '@/shared/components/bold-span/bold-span.styled';
import { Description } from '@/shared/components/info-block/withDescription/describedInfoBlock.styled';
import { InfoSection } from '@/shared/components/info-section';
import { PageSEO } from '@/shared/lib/meta';
import { getTranslationsStaticProps } from '@/shared/lib/ssr';
import { EnhancedNextPage } from '@/shared/types/enhanced-next-page';
import { SSGPageProps } from '@/shared/types/ssg-page-props';

export const getStaticProps = getTranslationsStaticProps(['agreement', 'common']);

type IndexPageProps = SSGPageProps;

const AgreementPage: EnhancedNextPage<IndexPageProps> = () => {
  const { t } = useTranslation('agreement');

  return (
    <>
      <PageSEO title={t('SEO_TITLE')} description={t('SEO_DESCRIPTION')} />

      <InfoSection heading={t('AGREEMENT_TITLE')}>
        <Description>{t('AGREEMENT_DESCRIPTION1')}</Description>
        <Description>
          {t('AGREEMENT_DESCRIPTION2')}
          <BoldedSpan>{t('AGREEMENT_DESCRIPTION-BOLD')}</BoldedSpan>
        </Description>
        <AgreementData />
      </InfoSection>
    </>
  );
};

AgreementPage.Layout = FooterLayout;

export default AgreementPage;
