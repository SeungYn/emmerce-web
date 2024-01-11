import Header from '../Header/Header';
import { Product } from '@/service/types/product';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';

type Props = {
  productList: Product[];
};

export default function RankingItems({ productList }: Props) {
  return (
    <div>
      <Header title='랭킹' subTitle='가장 많이 판매된 인기상품' />

      <div className='mt-4'>
        <ul className='w-full flex flex-shrink-0 flex-wrap  mt-4'>
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
