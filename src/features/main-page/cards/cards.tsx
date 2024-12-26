import * as React from 'react';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import InfoImageMobile1 from 'public/static/images/info-1-mobile.png';
import InfoImage1 from 'public/static/images/info-1.png';
import InfoImageMobile2 from 'public/static/images/info-2-mobile.png';
import InfoImage2 from 'public/static/images/info-2.png';
import InfoImageMobile3 from 'public/static/images/info-3-mobile.png';
import InfoImage3 from 'public/static/images/info-3.png';
import InfoImageMobile4 from 'public/static/images/info-4-mobile.png';
import InfoImage4 from 'public/static/images/info-4.png';

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <CardsSection id="how-it-works">
      {cardsInfo.map((card, index) => {
        const targetScale = 1 - (cardsInfo.length - index) * 0.05;
        return (
          <Card
            key={card.id}
            i={index}
            text={t(card.text)}
            image={selectImage(card.images)}
            progress={scrollYProgress}
            textLocation={card.location}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </CardsSection>
  );
};
