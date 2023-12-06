'use client';

import Header from '../Header/Header';
import MainItem from '@/components/common/listitem/MainItem/MainItem';
import { Product } from '@/service/types/product';
import useMovePageToDetail from '@/hooks/product/useMovePageToDetail';

type Props = {
  productList: Product[];
};

export default function RankingItems({ productList }: Props) {
  const handleMovePage = useMovePageToDetail();

  return (
    <div>
      <Header title='랭킹' subTitle='가장 많이 판매된 인기상품' />

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
