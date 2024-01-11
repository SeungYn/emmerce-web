import MiniItem, {
  MiniItemWrapper,
} from '@/components/common/listitem/MiniItem/MiniItem';
import Header from '../Header/Header';
import { Product } from '@/service/types/product';

type Props = {
  productList: Product[];
};

export default function CustomItems({ productList }: Props) {
  return (
    <div>
      <Header
        title='고객님을 위해 준비했어요'
        subTitle='당신을 위한 맞춤 상품'
      />

      <div className='overflow-auto mt-4'>
        <ul className='flex flex-wrap shrink-0 w-[1500px] gap-4'>
          {productList.map((item) => (
            <MiniItemWrapper key={item.productId} width={340} height={110}>
              <MiniItemWrapper.Item product={item} />
            </MiniItemWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
}
