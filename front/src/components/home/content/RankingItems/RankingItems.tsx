import { items } from '@/util/mock/data/item';
import Header from '../Header/Header';
import MainItem from '@/components/common/listitem/MainItem/MainItem';

export default function RankingItems() {
  return (
    <div>
      <Header title='랭킹' subTitle='가장 많이 판매된 인기상품' />

      <div className='mt-4'>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {items.map((item, i) => (
            <li key={item.productId} className='[&:nth-child(n+6)]:mt-10'>
              <MainItem item={item} rank={i + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
