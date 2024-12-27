import React from 'react';
import { MotionValue, useTransform } from 'framer-motion';

import { CardContainer, CardInfo, CardWrapper } from '@/shared/components/card/card.styled';
import { StyledImage } from '@/shared/components/styled-image/styled-image.styled';

type CardProps = {
  text: string;
  image: string;
  textLocation: string;
  i: number;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>;
};

export const Card = ({ i, text, image, textLocation, progress, range, targetScale }: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <CardWrapper>
      <CardContainer style={{ scale, bottom: `calc(-10% + ${i * 32}px)` }}>
        <CardInfo textLocation={textLocation}>{text}</CardInfo>
        <StyledImage src={image} alt="image" fill unoptimized />
      </CardContainer>
    </CardWrapper>
  );
};
