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
      <Header title='새로운 상품을 만나보세요' subTitle='새로운 상품' />

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
