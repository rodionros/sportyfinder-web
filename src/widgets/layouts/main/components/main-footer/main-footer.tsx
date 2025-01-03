import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Tg from 'public/static/images/tg-desk-white.svg';
import Vk from 'public/static/images/vk-desk-white.svg';

import { Footer, FooterLink, FooterLogo } from '@/layouts/main/components/main-footer/main-footer.styled';

import { LocaleToggler } from '@/features/locale-toggler';

import { FooterLinksList } from '@/shared/components/footer-links-list';

export const MainFooter = () => {
  const { t } = useTranslation('common');

  return (
    <Footer>
      <FooterLogo />

      <FooterLinksList $contacts>
        <li>
          <FooterLink href="/agreement">{t('FOOTER_AGREEMENT')}</FooterLink>
        </li>
        <li>
          <FooterLink href="/privacy">{t('FOOTER_PRIVACY')}</FooterLink>
        </li>
        <li>
          <FooterLink href="mailto:support@sportyfinder.ru" is_email="true" target="_blank">
            support@sportyfinder.ru
          </FooterLink>
        </li>
      </FooterLinksList>

      <FooterLinksList $row $icons>
        <li>
          <FooterLink href="https://t.me/sportyfinder" target="_blank">
            <Tg />
          </FooterLink>
        </li>
        <li>
          <FooterLink href="https://vk.com/sportyfinder" target="_blank">
            <Vk />
          </FooterLink>
        </li>
      </FooterLinksList>

      <LocaleToggler />
    </Footer>
  );
};
