const buildSuffix = (url?: { query?: Record<string, string>; hash?: string }) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/404' as const, hash: url?.hash }),
  },
  agreement: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/agreement' as const, hash: url?.hash }),
  },
  auth: {
    login: {
      $url: (url?: { hash?: string | undefined } | undefined) => ({
        pathname: '/auth/login' as const,
        hash: url?.hash,
      }),
    },
    signup: {
      $url: (url?: { hash?: string | undefined } | undefined) => ({
        pathname: '/auth/signup' as const,
        hash: url?.hash,
      }),
    },
  },
  dashboard: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/dashboard' as const, hash: url?.hash }),
  },
  privacy: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/privacy' as const, hash: url?.hash }),
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  fonts: {
    FuturaPTBook_woff2: '/fonts/FuturaPTBook.woff2',
    FuturaPTMedium_woff2: '/fonts/FuturaPTMedium.woff2',
  },
  locales: {
    en: {
      $404_json: '/locales/en/404.json',
      agreement_json: '/locales/en/agreement.json',
      auth_json: '/locales/en/auth.json',
      common_json: '/locales/en/common.json',
      index_json: '/locales/en/index.json',
      privacy_json: '/locales/en/privacy.json',
    },
    ru: {
      $404_json: '/locales/ru/404.json',
      agreement_json: '/locales/ru/agreement.json',
      auth_json: '/locales/ru/auth.json',
      common_json: '/locales/ru/common.json',
      index_json: '/locales/ru/index.json',
      privacy_json: '/locales/ru/privacy.json',
    },
  },
  site_webmanifest: '/site.webmanifest',
  static: {
    images: {
      AppGallery_mobile_png: '/static/images/AppGallery-mobile.png',
      AppGallery_mobile_hover_png: '/static/images/AppGallery-mobile_hover.png',
      AppGallery_png: '/static/images/AppGallery.png',
      AppGallery_hover_png: '/static/images/AppGallery_hover.png',
      AppStore_mobile_png: '/static/images/AppStore-mobile.png',
      AppStore_mobile_hover_png: '/static/images/AppStore-mobile_hover.png',
      AppStore_png: '/static/images/AppStore.png',
      AppStore_hover_png: '/static/images/AppStore_hover.png',
      GooglePlay_mobile_png: '/static/images/GooglePlay-mobile.png',
      GooglePlay_mobile_hover_png: '/static/images/GooglePlay-mobile_hover.png',
      GooglePlay_png: '/static/images/GooglePlay.png',
      GooglePlay_hover_png: '/static/images/GooglePlay_hover.png',
      Main_screen_mobile_png: '/static/images/Main screen mobile.png',
      Main_screen_png: '/static/images/Main screen.png',
      S_desktop_black_svg: '/static/images/S-desktop-black.svg',
      S_desktop_white_svg: '/static/images/S-desktop-white.svg',
      feature_1_png: '/static/images/feature-1.png',
      feature_2_png: '/static/images/feature-2.png',
      feature_3_png: '/static/images/feature-3.png',
      feature_4_png: '/static/images/feature-4.png',
      info_1_mobile_png: '/static/images/info-1-mobile.png',
      info_1_png: '/static/images/info-1.png',
      info_2_mobile_png: '/static/images/info-2-mobile.png',
      info_2_png: '/static/images/info-2.png',
      info_3_mobile_png: '/static/images/info-3-mobile.png',
      info_3_png: '/static/images/info-3.png',
      info_4_mobile_png: '/static/images/info-4-mobile.png',
      info_4_png: '/static/images/info-4.png',
      logo_desktop_black_svg: '/static/images/logo-desktop-black.svg',
      logo_desktop_white_svg: '/static/images/logo-desktop-white.svg',
      menu_black_svg: '/static/images/menu-black.svg',
      menu_white_svg: '/static/images/menu-white.svg',
      sports_1_png: '/static/images/sports-1.png',
      sports_2_png: '/static/images/sports-2.png',
      sports_3_png: '/static/images/sports-3.png',
      tg_desk_black_svg: '/static/images/tg-desk-black.svg',
      tg_desk_black_hover_svg: '/static/images/tg-desk-black_hover.svg',
      tg_desk_white_svg: '/static/images/tg-desk-white.svg',
      tg_desk_white_hover_svg: '/static/images/tg-desk-white_hover.svg',
      tg_mobile_black_svg: '/static/images/tg-mobile-black.svg',
      tg_mobile_black_hover_svg: '/static/images/tg-mobile-black_hover.svg',
      tg_mobile_white_svg: '/static/images/tg-mobile-white.svg',
      tg_mobile_white_hover_svg: '/static/images/tg-mobile-white_hover.svg',
      theme_black_svg: '/static/images/theme-black.svg',
      theme_black_hover_svg: '/static/images/theme-black_hover.svg',
      theme_white_svg: '/static/images/theme-white.svg',
      theme_white_hover_svg: '/static/images/theme-white_hover.svg',
      theme_svg: '/static/images/theme.svg',
      vk_desk_black_svg: '/static/images/vk-desk-black.svg',
      vk_desk_black_hover_svg: '/static/images/vk-desk-black_hover.svg',
      vk_desk_white_svg: '/static/images/vk-desk-white.svg',
      vk_desk_white_hover_svg: '/static/images/vk-desk-white_hover.svg',
      vk_mobile_black_svg: '/static/images/vk-mobile-black.svg',
      vk_mobile_black_hover_svg: '/static/images/vk-mobile-black_hover.svg',
      vk_mobile_white_svg: '/static/images/vk-mobile-white.svg',
      vk_mobile_white_hover_svg: '/static/images/vk-mobile-white_hover.svg',
      $404_png: '/static/images/404.png',
      logo_og_png: '/static/images/logo-og.png',
    },
  },
} as const;

export type StaticPath = typeof staticPath;
