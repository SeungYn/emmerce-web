import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import MyNavigation from '@/components/my/MyNavigation/MyNavigation';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import { serverService } from '@/service/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
};

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

      <MaxXLContainer className='min-h-[70vh]'>
        <section className='flex gap-4 mt-8'>
          <MyNavigation />
          <section className='flex-shrink-0 flex-grow'>{children}</section>
        </section>
      </MaxXLContainer>
      <GlobalFooter />
    </>
  );
}
