import { InfoBlock, PointedItem } from '@/components/info-block/pointedInfoBlock.styled';
import { Description } from '@/components/info-block/withDescription/describedInfoBlock.styled';

type TDescribedInfoBlockProps = {
  heading: string;
  description: string;
  pointedList: string[] | undefined;
  id: number;
};

export const DescribedInfoBlock = (props: TDescribedInfoBlockProps) => {
  const { id, heading, pointedList, description } = props;

  return (
    <InfoBlock>
      {`${id}. ${heading}`}
      <Description>{description}</Description>
      <ul>
        {pointedList?.map((point, index) => {
          return <PointedItem key={`${id}.${index}`}>{point}</PointedItem>;
        })}
      </ul>
    </InfoBlock>
  );
};
