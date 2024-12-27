import * as React from 'react';
import LeadMobile from 'public/static/images/Main screen mobile.webp';
import LeadDesktop from 'public/static/images/Main screen.webp';

import { ImagesProps } from '@/pages/index.page';

import { LeadSection, StyledLeadImage } from '@/features/main-page/lead/lead.styled';

interface LeadProps {
  selectImage: (images: ImagesProps) => string;
}

const leadImages = {
  desktop: LeadDesktop.src,
  mobile: LeadMobile.src,
};

export const Lead = (props: LeadProps) => {
  const { selectImage } = props;

  return (
    <LeadSection>
      <StyledLeadImage src={selectImage(leadImages)} alt="Sportyfinder" />
    </LeadSection>
  );
};
