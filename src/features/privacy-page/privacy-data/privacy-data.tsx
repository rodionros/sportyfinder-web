import { useTranslation } from 'next-i18next';

import { InfoBlock, PointedItem } from '@/shared/components/info-block/pointedInfoBlock.styled';
import { DashedItem } from '@/shared/components/info-block/withDashedList/dashedInfoBlock.styled';
import { Description } from '@/shared/components/info-block/withDescription/describedInfoBlock.styled';
import { InfoList } from '@/shared/components/info-list';
import { getTranslationsStaticProps } from '@/shared/lib/ssr';

export const getStaticProps = getTranslationsStaticProps(['privacy', 'common']);

export const PrivacyData = () => {
  const { t } = useTranslation('privacy');

  return (
    <InfoList>
      <InfoBlock>
        1. {t('PRIVACY_COMMON_HEADING')}
        <Description>{t('PRIVACY_COMMON_DESCRIPTION')}</Description>
        <ul>
          <PointedItem>{t('PRIVACY_COMMON_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_COMMON_P-LIST_2')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        2. {t('PRIVACY_TERMS_HEADING')}
        <ul>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_2')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_3')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_4')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_5')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_6')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_7')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_8')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_9')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_10')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_11')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_12')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_13')}</PointedItem>
          <PointedItem>{t('PRIVACY_TERMS_P-LIST_14')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        3. {t('PRIVACY_OPERATOR_HEADING')}
        <ul>
          <PointedItem>
            {t('PRIVACY_OPERATOR_D-LIST1_HEADING')}
            <ul>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST1_1')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST1_2')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST1_3')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>
            {t('PRIVACY_OPERATOR_D-LIST2_HEADING')}
            <ul>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_1')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_2')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_3')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_4')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_5')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_6')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_7')}</DashedItem>
              <DashedItem>{t('PRIVACY_OPERATOR_D-LIST2_8')}</DashedItem>
            </ul>
          </PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        4. {t('PRIVACY_SUBJECT_HEADING')}
        <ul>
          <PointedItem>
            {t('PRIVACY_SUBJECT_D-LIST1_HEADING')}
            <ul>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_1')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_2')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_3')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_4')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_5')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST1_6')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>
            {t('PRIVACY_SUBJECT_D-LIST2_HEADING')}
            <ul>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST2_1')}</DashedItem>
              <DashedItem>{t('PRIVACY_SUBJECT_D-LIST2_2')}</DashedItem>
            </ul>
          </PointedItem>
          <PointedItem>{t('PRIVACY_SUBJECT_D-LIST3_HEADING')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        5. {t('PRIVACY_PRINCIPLES_HEADING')}
        <ul>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_2')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_3')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_4')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_5')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_6')}</PointedItem>
          <PointedItem>{t('PRIVACY_PRINCIPLES_P-LIST_7')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        6. {t('PRIVACY_CONDITIONS_HEADING')}
        <ul>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_2')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_3')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_4')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_5')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_6')}</PointedItem>
          <PointedItem>{t('PRIVACY_CONDITIONS_P-LIST_7')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        7. {t('PRIVACY_ORDER_HEADING')}
        <Description>{t('PRIVACY_ORDER_DESCRIPTION')}</Description>
        <ul>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_2')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_3')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_4')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_5')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_6')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_7')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_8')}</PointedItem>
          <PointedItem>{t('PRIVACY_ORDER_P-LIST_9')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        8. {t('PRIVACY_ACTIONS_HEADING')}
        <ul>
          <PointedItem>{t('PRIVACY_ACTIONS_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_ACTIONS_P-LIST_2')}</PointedItem>
        </ul>
      </InfoBlock>
      <InfoBlock>
        9. {t('PRIVACY_FINAL_HEADING')}
        <ul>
          <PointedItem>{t('PRIVACY_FINAL_P-LIST_1')}</PointedItem>
          <PointedItem>{t('PRIVACY_FINAL_P-LIST_2')}</PointedItem>
          <PointedItem>{t('PRIVACY_FINAL_P-LIST_3')}</PointedItem>
        </ul>
      </InfoBlock>
    </InfoList>
  );
};
