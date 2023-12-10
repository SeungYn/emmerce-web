import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MyNavigation from '@/components/my/MyNavigation/MyNavigation';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import { serverService } from '@/service/server';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await serverService.category.getCategoryList();

  return (
    <>
      {/* 다음 주소 api */}

      <GNB categoryList={categoryList} />

      <MaxXLContainer>
        <section className='flex gap-4 mt-8'>
          <MyNavigation />

          <section className='flex-shrink-0 flex-grow'>{children}</section>
        </section>
      </MaxXLContainer>
    </>
  );
}

const CTListHeader = '';
