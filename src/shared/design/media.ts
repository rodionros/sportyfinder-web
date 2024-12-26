export type Breakpoint = 'desktop' | 'laptop' | 'tablet' | 'mobile';

export const breakpoints: Record<Breakpoint, number> = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const breakpointsArray = Object.values(breakpoints).slice(1);
