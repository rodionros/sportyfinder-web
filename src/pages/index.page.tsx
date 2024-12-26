import * as React from 'react';
import { useTranslation } from 'next-i18next';

import { MainLayout, useMobile } from '@/layouts/main';

import { Cards } from '@/features/main-page/cards';
import { Features } from '@/features/main-page/features/features';
import { Lead } from '@/features/main-page/lead/lead';
import { Slogan } from '@/features/main-page/slogan/slogan';
import { Sports } from '@/features/main-page/sports';

import { PageSEO } from '@/shared/lib/meta';
import { getTranslationsStaticProps } from '@/shared/lib/ssr';
import { EnhancedNextPage } from '@/shared/types/enhanced-next-page';
import { SSGPageProps } from '@/shared/types/ssg-page-props';

type IndexPageProps = SSGPageProps;
export interface ImagesProps {
  desktop: string;
  mobile: string;
}

export const getStaticProps = getTranslationsStaticProps(['index', 'common']);

const IndexPage: EnhancedNextPage<IndexPageProps> = () => {
  const { t } = useTranslation('index');
  const isMobile = useMobile();

  const selectImage = (images: ImagesProps) => {
    return isMobile ? images.mobile : images.desktop;
  };

  return (
    <>
      <PageSEO title={t('SEO_TITLE')} description={t('SEO_DESCRIPTION')} />

      <Lead selectImage={selectImage} />
      <Slogan />
      <Cards selectImage={selectImage} />
      <Features />
      <Sports />
    </>
  );
};

IndexPage.Layout = MainLayout;

export default IndexPage;
