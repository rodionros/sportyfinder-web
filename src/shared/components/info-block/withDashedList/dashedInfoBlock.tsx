import { InfoBlock, PointedItem } from '@/shared/components/info-block/pointedInfoBlock.styled';
import { DashedItem } from '@/shared/components/info-block/withDashedList/dashedInfoBlock.styled';

type TDashedInfoBlockProps = {
  heading: string;
  pointedWithDashed: string[][];
  id: number;
};

export const DashedInfoBlock = (props: TDashedInfoBlockProps) => {
  const { id, heading, pointedWithDashed } = props;

  return (
    <InfoBlock>
      {`${id}. ${heading}`}
      <ul>
        {pointedWithDashed.map((itemArr, index) => {
          return (
            <PointedItem key={`${id}.${index}`}>
              {itemArr[0]}
              <ul>
                {itemArr.slice(1).map((item, innerIdx) => {
                  return <DashedItem key={`${id}.${index}.${innerIdx}`}>{item}</DashedItem>;
                })}
              </ul>
            </PointedItem>
          );
        })}
      </ul>
    </InfoBlock>
  );
};
