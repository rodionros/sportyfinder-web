import * as React from 'react';
import deepmerge from 'deepmerge';

import { responsiveProperty } from '../lib/responsive-property';

export const defaultFontFamily =
  'FuturaPT, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif';

export const fontWeight = {
  light: 300,
  // Useful to set here if using anything other than `normal`
  normal: 400,
  medium: 500,
  // Useful to set here when bold webfonts come as 400 font-weight.
  bold: 700,
  heavy: 900,
  // instead of browser default, bold
  headings: 'bold',
};

export const pxToRem = (size: number, htmlFontSize = 16, coef = 1): number => size / htmlFontSize / coef;

function oneDecimal(x: number) {
  return Math.round(10 * x) / 10;
}

const caseAllCaps: React.CSSProperties = {
  textTransform: 'uppercase',
};

export const calculateFluidTypography = (minSize: number, maxSize: number): string => {
  const vwCoefficient = oneDecimal((1000 * (maxSize - minSize)) / (1440 - 960));
  const remCoefficient = oneDecimal(minSize - (960 * (maxSize - minSize)) / (1440 - 960));

  const computedClamp = `clamp(${minSize}rem, ${vwCoefficient}vw ${remCoefficient >= 0 ? '+' : '-'} ${Math.abs(
    remCoefficient,
  )}rem, ${maxSize}rem)`;

  return computedClamp;
};

interface ResponsiveVariantOptions {
  weight: number | string | (number | string | null)[];
  size: number | string | (number | string | null)[];
  lineHeight: number | string | (number | string | null)[];
  letterSpacing: number | string | (number | string | null)[];
  casing?: React.CSSProperties;
}

const buildResponsiveVariant = (options: ResponsiveVariantOptions): React.CSSProperties => {
  const { weight, size, letterSpacing, lineHeight, casing } = options;

  const responsiveFontSize = responsiveProperty({
    property: 'fontSize',
    values: Array.isArray(size) ? size : [size],
  });

  const responsiveLineHeight = responsiveProperty({
    property: 'lineHeight',
    values: Array.isArray(lineHeight) ? lineHeight : [lineHeight],
  });

  const responsiveWeight = responsiveProperty({
    property: 'fontWeight',
    values: Array.isArray(weight) ? weight : [weight],
  });

  const responsiveLetterSpacing = responsiveProperty({
    property: 'letterSpacing',
    values: Array.isArray(letterSpacing) ? letterSpacing : [letterSpacing],
  });

  const responsiveStyles = deepmerge(
    deepmerge(responsiveFontSize, responsiveLineHeight),
    deepmerge(responsiveWeight, responsiveLetterSpacing),
  );

  return {
    fontFamily: defaultFontFamily,
    ...responsiveStyles,
    ...casing,
  };
};

export const headingsNew = {
  title1: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '80px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  title1_adaptive: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '64px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  title1_mobile: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '32px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading1: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '64px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading2: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '32px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading1_adaptive: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '48px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading2_adaptive: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '24px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading1_mobile: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '24px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  heading2_mobile: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '16px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
};

export const paragraphsNew = {
  base: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '32px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  base_adaptive: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '24px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  base_mobile: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '16px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  s: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '20px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  s_adaptive: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '16px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
  s_mobile: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '12px',
    lineHeight: 1,
    letterSpacing: 'normal',
  }),
};

export const overlines = {
  overline1: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '12px',
    lineHeight: 2.66,
    letterSpacing: '1px',
    casing: caseAllCaps,
  }),
  overline2: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '10px',
    lineHeight: 2.66,
    letterSpacing: '1px',
    casing: caseAllCaps,
  }),
};

export const captions = {
  caption1: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '12px',
    lineHeight: 1.2,
    letterSpacing: '0.4px',
  }),
  caption2: buildResponsiveVariant({
    weight: fontWeight.normal,
    size: '10px',
    lineHeight: 1.2,
    letterSpacing: '0.4px',
  }),
};

export const buttons = {
  button1: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '14px',
    lineHeight: 1,
    letterSpacing: '0.4px',
  }),
  button2: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '16px',
    lineHeight: 1,
    letterSpacing: '0.4px',
  }),
  button3: buildResponsiveVariant({
    weight: fontWeight.medium,
    size: '18px',
    lineHeight: 1,
    letterSpacing: '0.4px',
  }),
};

export const variants = {
  ...headingsNew,
  ...paragraphsNew,
  ...buttons,
  ...captions,
  ...overlines,
};
