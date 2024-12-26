import { InfoBlock, PointedItem } from '@/components/info-block/pointedInfoBlock.styled';

type TInfoBlockProps = {
  heading: string;
  pointedList: string[] | undefined;
  id: number;
};

export const PointedInfoBlock = (props: TInfoBlockProps) => {
  const { id, heading, pointedList } = props;

  return (
    <InfoBlock>
      {`${id}. ${heading}`}
      <ul>
        {pointedList?.map((point, index) => {
          return <PointedItem key={`${id}.${index}`}>{point}</PointedItem>;
        })}
      </ul>
    </InfoBlock>
  );
};
