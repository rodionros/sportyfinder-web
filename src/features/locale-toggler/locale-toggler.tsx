import * as React from 'react';
import { useRouter } from 'next/router';

import { ButtonListItem, LocaleButton, LocaleButtonSlash } from '@/features/locale-toggler/locale-toggler.styled';

import { FooterLinksList } from '@/shared/components/footer-links-list';

export const LocaleToggler = () => {
  const router = useRouter();

  const changeLocale = (locale: string) => {
    const { pathname, query, asPath } = router;

    router.replace({ pathname, query }, asPath, { locale }) as unknown as void;
  };

  return (
    <FooterLinksList $row $lang>
      <ButtonListItem>
        <LocaleButton type="button" onClick={() => changeLocale('ru')}>
          RU
        </LocaleButton>
      </ButtonListItem>
      <ButtonListItem>
        <LocaleButtonSlash type="button" onClick={() => changeLocale('en')}>
          EN
        </LocaleButtonSlash>
      </ButtonListItem>
    </FooterLinksList>
  );
};
