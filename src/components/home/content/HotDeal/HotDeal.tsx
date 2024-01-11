import { Product } from '@/service/types/product';
import Header from '../Header/Header';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';

type Props = {
  productList: Product[];
};

export default function HotDeal({ productList }: Props) {
  return (
    <div>
      <Header title='핫딜' subTitle='현재 할인율이 높아요' />

      <div className='mt-4'>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {productList.map((item, i) => (
            <li
              key={item.productId}
              className='[&:nth-child(n+6)]:mt-10 w-[256px] h-[340px] px-[5px]'
            >
              <MainItemLink
                item={item}
                rank={i + 1}
                targetLink={`/detail/${item.productId}`}
                width={246}
                height={240}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
