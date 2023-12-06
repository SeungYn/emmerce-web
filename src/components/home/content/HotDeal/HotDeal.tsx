'use client';

import useMovePageToDetail from '@/hooks/product/useMovePageToDetail';
import { Product } from '@/service/types/product';
import Header from '../Header/Header';
import MainItem from '@/components/common/listitem/MainItem/MainItem';

type Props = {
  productList: Product[];
};

export default function HotDeal({ productList }: Props) {
  const handleMovePage = useMovePageToDetail();

  return (
    <div>
      <Header title='핫딜' subTitle='현재 할인율이 높아요' />

      <div className='mt-4'>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {productList.map((item, i) => (
            <li key={item.productId} className='[&:nth-child(n+6)]:mt-10'>
              <MainItem
                item={item}
                rank={i + 1}
                handleMovePage={handleMovePage}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
