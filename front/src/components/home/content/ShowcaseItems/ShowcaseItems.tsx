'use client';
import { useState } from 'react';
import Header from '../Header/Header';
import MainItem from '@/components/common/listitem/MainItem/MainItem';
import { items } from '@/util/mock/data/item';

const category: CategoryType[] = [
  '패션의류',
  '잡화/언더웨어',
  '아동',
  '모던하우스',
];

export default function ShowcaseItems() {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(
    category[0]
  );

  return (
    <div>
      <Header title='쇼케이스' subTitle='놓쳐서는 안 될 초특급 상품' />

      <div className='mt-4'>
        <nav className='flex gap-4 shrink-0'>
          {category.map((cate) => (
            <button
              key={cate}
              className={`p-2 px-4 rounded-full border border-gray-300 text-gray-400 text-sm ${isSelectedCategory(
                cate === currentCategory
              )}`}
              onClick={() => setCurrentCategory(cate)}
            >
              {cate}
            </button>
          ))}
        </nav>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {items.map((item) => (
            <li key={item.productId} className='[&:nth-child(n+6)]:mt-10'>
              <MainItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function isSelectedCategory(flag: boolean) {
  if (flag) return 'bg-black text-white ';

  return 'bg-white text-gray-400';
}

type CategoryType = '패션의류' | '잡화/언더웨어' | '아동' | '모던하우스';
