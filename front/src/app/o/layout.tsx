import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import { getCategoryList } from '@/service/server/category';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Navbar = dynamic(() => import('@/components/navbar/Navbar/Navbar'), {
  ssr: false,
});

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await getCategoryList();

  return (
    <>
      {/* 다음 주소 api */}
      <Script
        src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        async
      />
      <Navbar isLogo={false} categoryList={categoryList} />
      <section>
        <MaxXLContainer>{children}</MaxXLContainer>
      </section>
    </>
  );
}
