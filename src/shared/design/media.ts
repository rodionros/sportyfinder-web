export type Breakpoint = 'desktop' | 'laptop' | 'tablet' | 'mobile' | 'mobileMini';

export const breakpoints: Record<Breakpoint, number> = {
  mobileMini: 375,
  mobile: 650,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const breakpointsArray = Object.values(breakpoints).slice(1);
