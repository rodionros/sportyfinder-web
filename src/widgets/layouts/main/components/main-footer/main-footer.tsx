import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Sportyfinder from 'public/static/images/logo-desktop-white.svg';
import Tg from 'public/static/images/tg-desk-white.svg';
import Vk from 'public/static/images/vk-desk-white.svg';

import { Footer, FooterLink } from '@/layouts/main/components/main-footer/main-footer.styled';

import { LocaleToggler } from '@/features/locale-toggler';

import { FooterLinksList } from '@/shared/components/footer-links-list';

export const MainFooter = () => {
  const { t } = useTranslation('common');

  return (
    <Footer>
      <Sportyfinder />

      <LocaleToggler />

      <FooterLinksList $contacts>
        <li>
          <FooterLink href="/privacy">{t('FOOTER_PRIVACY')}</FooterLink>
        </li>
        <li>
          <FooterLink $email href="mailto:support@sportyfinder.ru">
            support@sportyfinder.ru
          </FooterLink>
        </li>
      </FooterLinksList>

      <FooterLinksList $row $icons>
        <li>
          <FooterLink href="">
            <Tg />
          </FooterLink>
        </li>
        <li>
          <FooterLink href="">
            <Vk />
          </FooterLink>
        </li>
      </FooterLinksList>
    </Footer>
  );
};
