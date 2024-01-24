import AuthGuardHook from '@/components/auth/AuthGuardHook';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import OrderLoading from '@/components/common/loading/OrderLoading/OrderLoading';
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
      <AuthGuardHook />
      {/* 다음 주소 api */}
      <Script
        src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        async
      />
      <OrderLoading />
      <GNB categoryList={categoryList} />
      <section>
        <MaxXLContainer className='min-h-[70vh]'>{children}</MaxXLContainer>
      </section>
      <GlobalFooter />
    </>
  );
}
