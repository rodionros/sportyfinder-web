import * as React from 'react';

import { Info, InfoHeading } from '@/shared/components/info-section/info-section.styled';

interface InfoSectionLayoutProps {
  /**
   * The content
   */
  children?: React.ReactNode;
  heading: string;
}

export const InfoSection = (props: InfoSectionLayoutProps) => {
  const { children, heading } = props;

  return (
    <Info>
      <InfoHeading>{heading}</InfoHeading>
      {children}
    </Info>
  );
};
