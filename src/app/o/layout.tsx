import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import { serverService } from '@/service/server';
import Script from 'next/script';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await serverService.category.getCategoryList();

  return (
    <>
      {/* 다음 주소 api */}
      <Script
        src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        async
      />
      <GNB categoryList={categoryList} />
      <section>
        <MaxXLContainer className='min-h-[70vh]'>{children}</MaxXLContainer>
      </section>
      <GlobalFooter />
    </>
  );
}
