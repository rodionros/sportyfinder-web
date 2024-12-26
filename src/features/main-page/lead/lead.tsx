import * as React from 'react';
import leadMobile from '@/public/static/images/Main screen mobile.webp';
import lead from '@/public/static/images/Main screen.webp';

import { ImagesProps } from '@/pages/index.page';

import { LeadSection, StyledLeadImage } from '@/features/main-page/lead/lead.styled';

interface LeadProps {
  selectImage: (images: ImagesProps) => string;
}

const leadImages = {
  desktop: lead.src,
  mobile: leadMobile.src,
};

export const Lead = (props: LeadProps) => {
  const { selectImage } = props;

  return (
    <LeadSection>
      <StyledLeadImage
        src={selectImage(leadImages)}
        width="1120"
        height="905"
        unoptimized
        priority
        alt="Sportyfinder"
      />
    </LeadSection>
  );
};
