'use client';

import SSRSuspense from '@/components/common/util/SSRSuspense';
import ShowcaseItems from '@/components/home/content/ShowcaseItems/ShowcaseItems';
import CommonMainSkeleton from '@/components/home/content/skeleton/CommonMainSkeleton';
import useRecommendProducts from '@/hooks/api/product/useRecommendProducts';
import useRecommendProductsPrefetch from '@/hooks/api/product/useRecommendProductsPrefetch';
import { useRouter } from 'next/navigation';
import { ComponentProps, useCallback, useState } from 'react';

const categories = [
  {
    categoryId: 1,
    name: '캐주얼/유니섹스',
  },
  {
    categoryId: 11,
    name: '여성의류',
  },
  {
    categoryId: 25,
    name: '슈즈',
  },
];

export default function RecommendProductsContainer() {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const handleMovePage = useCallback(
    (productId: number) => {
      router.push(`/detail/${productId}`);
    },
    [router]
  );

  // 프리패칭
  useRecommendProductsPrefetch(categories[1].categoryId);
  useRecommendProductsPrefetch(categories[2].categoryId);

  return (
    <SSRSuspense fallback={<CommonMainSkeleton />}>
      <RecommendProductsSuspense
        categoryList={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        handleMovePage={handleMovePage}
      />
    </SSRSuspense>
  );
}

type SuspenseProps = Omit<
  ComponentProps<typeof ShowcaseItems>,
  'recommendProductList'
>;

function RecommendProductsSuspense({
  currentCategory,
  setCurrentCategory,
  handleMovePage,
  categoryList,
}: SuspenseProps) {
  const { data } = useRecommendProducts(currentCategory.categoryId);

  return (
    <ShowcaseItems
      currentCategory={currentCategory}
      categoryList={categoryList}
      setCurrentCategory={setCurrentCategory}
      handleMovePage={handleMovePage}
      recommendProductList={data}
    />
  );
}
