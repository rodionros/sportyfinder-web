import { useTranslation } from 'next-i18next';

import { InfoBlock, PointedItem } from '@/shared/components/info-block/pointedInfoBlock.styled';
import { DashedItem } from '@/shared/components/info-block/withDashedList/dashedInfoBlock.styled';
import { Description } from '@/shared/components/info-block/withDescription/describedInfoBlock.styled';
import { InfoList } from '@/shared/components/info-list';
import { getTranslationsStaticProps } from '@/shared/lib/ssr';

export const getStaticProps = getTranslationsStaticProps(['agreement', 'common']);

// export const AgreementData = () => {
//   const { t } = useTranslation('agreement');
//
//   return (
//     <InfoList>
//       {agreementInfo.map((data) => {
//         if (data.description) {
//           return (
//             <DescribedInfoBlock
//               heading={t(data.heading)}
//               description={t(data.description)}
//               pointedList={t(data.pointedList)}
//               id={data.id}
//               key={data.id}
//             />
//           );
//         } else if (data.pointedWithDashed) {
//           return (
//             <DashedInfoBlock
//               id={data.id}
//               heading={t(data.heading)}
//               pointedWithDashed={t(data.pointedWithDashed)}
//               key={data.id}
//             />
//           );
//         } else {
//           return (
//             <PointedInfoBlock heading={t(data.heading)} id={data.id} pointedList={t(data.pointedList)} key={data.id} />
//           );
//         }
//       })}
//     </InfoList>
//   );
// };

export const AgreementData = () => {
  const { t } = useTranslation('agreement');

  return (
    <InfoList>
      <InfoBlock>
        1. {t('AGREEMENT_RIGHTS_HEADING')}
        <ul>
          <PointedItem>
            {t('AGREEMENT_RIGHTS_D-LIST1_HEADING')}
            <ul>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_1')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_2')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_3')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_4')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_5')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_6')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_7')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_8')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_9')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST1_10')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>
            {t('AGREEMENT_RIGHTS_D-LIST2_HEADING')}
            <ul>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST2_1')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST2_2')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST2_3')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST2_4')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST2_5')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>
            {t('AGREEMENT_RIGHTS_D-LIST3_HEADING')}
            <ul>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST3_1')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST3_2')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST3_3')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST3_4')}</DashedItem>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST3_5')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>
            {t('AGREEMENT_RIGHTS_D-LIST4_HEADING')}
            <ul>
              <DashedItem>{t('AGREEMENT_RIGHTS_D-LIST4_1')}</DashedItem>
            </ul>
          </PointedItem>
        </ul>
      </InfoBlock>

      <InfoBlock>
        2. {t('AGREEMENT_LIABILITY_HEADING')}
        <ul>
          <PointedItem>{t('AGREEMENT_LIABILITY_P-LIST_1')}</PointedItem>
          <PointedItem>{t('AGREEMENT_LIABILITY_P-LIST_2')}</PointedItem>
          <PointedItem>{t('AGREEMENT_LIABILITY_P-LIST_3')}</PointedItem>
          <PointedItem>{t('AGREEMENT_LIABILITY_P-LIST_4')}</PointedItem>
          <PointedItem>{t('AGREEMENT_LIABILITY_P-LIST_5')}</PointedItem>
        </ul>
      </InfoBlock>

      <InfoBlock>
        3. {t('AGREEMENT_TERMS_HEADING')}
        <Description>{t('AGREEMENT_TERMS_DESCRIPTION')}</Description>
      </InfoBlock>
    </InfoList>
  );
};
