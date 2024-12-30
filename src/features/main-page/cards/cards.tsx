import * as React from 'react';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import InfoImageMobile1 from 'public/static/images/info-1-mobile.webp';
import InfoImage1 from 'public/static/images/info-1.webp';
import InfoImageMobile2 from 'public/static/images/info-2-mobile.webp';
import InfoImage2 from 'public/static/images/info-2.webp';
import InfoImageMobile3 from 'public/static/images/info-3-mobile.webp';
import InfoImage3 from 'public/static/images/info-3.webp';
import InfoImageMobile4 from 'public/static/images/info-4-mobile.webp';
import InfoImage4 from 'public/static/images/info-4.webp';

import { ImagesProps } from '@/pages/index.page';

import { CardsSection } from '@/features/main-page/cards/cards.styled';

import { Card } from '@/shared/components/card';

interface CardsProps {
  selectImage: (images: ImagesProps) => string;
}

const cardsInfo = [
  {
    id: 0,
    text: 'CARDS_1',
    images: {
      desktop: InfoImage1.src,
      mobile: InfoImageMobile1.src,
    },
    location: 'right',
  },
  {
    id: 1,
    text: 'CARDS_2',
    images: {
      desktop: InfoImage2.src,
      mobile: InfoImageMobile2.src,
    },
    location: 'left',
  },
  {
    id: 2,
    text: 'CARDS_3',
    images: {
      desktop: InfoImage3.src,
      mobile: InfoImageMobile3.src,
    },
    location: 'right',
  },
  {
    id: 3,
    text: 'CARDS_4',
    images: {
      desktop: InfoImage4.src,
      mobile: InfoImageMobile4.src,
    },
    location: 'left',
  },
];

export const Cards = (props: CardsProps) => {
  const { t } = useTranslation('index');
  const { selectImage } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <CardsSection id="how-it-works">
      {cardsInfo.map((card, index) => {
        return (
          <Card
            key={card.id}
            i={index}
            text={t(card.text)}
            image={selectImage(card.images)}
            progress={scrollY}
            textLocation={card.location}
            range={[index * 0.25, 1]}
          />
        );
      })}
    </CardsSection>
  );
};
