'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Header from '../Header/Header';
import MainItem from '@/components/common/listitem/MainItem/MainItem';
import { RecommendCategory } from '@/service/types/category';
import { ProductList } from '@/service/types/product';

type Props = {
  categoryList: RecommendCategory[];
  currentCategory: RecommendCategory;
  setCurrentCategory: Dispatch<SetStateAction<RecommendCategory>>;
  handleMovePage: (productId: number) => void;
  recommendProductList: ProductList;
};

export default function ShowcaseItems({
  currentCategory,
  categoryList,
  setCurrentCategory,
  handleMovePage,
  recommendProductList,
}: Props) {
  return (
    <div>
      <Header title='오늘의 추천' subTitle='놓쳐서는 안 될 초특급 상품' />

      <div className='mt-4'>
        <nav className='flex gap-4 shrink-0'>
          {categoryList.map((cate) => (
            <button
              key={cate.categoryId}
              className={`p-2 px-4 rounded-full border border-gray-300 text-gray-400 text-sm ${isSelectedCategory(
                cate.categoryId === currentCategory.categoryId
              )}`}
              onClick={() => setCurrentCategory(cate)}
            >
              {cate.name}
            </button>
          ))}
        </nav>
        <ul className='w-full flex flex-shrink-0 flex-wrap justify-between mt-4'>
          {recommendProductList.content.map((item) => (
            <li key={item.productId} className='[&:nth-child(n+6)]:mt-10'>
              <MainItem item={item} handleMovePage={handleMovePage} />
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
