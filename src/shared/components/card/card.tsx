import React from 'react';
import { MotionValue, useTransform } from 'framer-motion';

import { CardContainer, CardImage, CardInfo, CardWrapper } from '@/shared/components/card/card.styled';

type CardProps = {
  text: string;
  image: string;
  textLocation: string;
  i: number;
  range: number[];
  progress: MotionValue<number>;
};

export const Card = ({ i, text, image, textLocation, progress, range }: CardProps) => {
  const yTransform = useTransform(progress, range, [1, -32 * i]);

  return (
    <CardWrapper>
      <CardContainer style={{ y: yTransform }}>
        <CardInfo textLocation={textLocation}>{text}</CardInfo>
        <CardImage src={image} alt="card-image" />
      </CardContainer>
    </CardWrapper>
  );
};
