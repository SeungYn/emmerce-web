import CartHeader from '@/components/cart/common/CartHeader/CartHeader';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import { getCategoryList } from '@/service/server/category';
import dynamic from 'next/dynamic';

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
      <Navbar isLogo={false} categoryList={categoryList} />
      <section>
        <MaxXLContainer>{children}</MaxXLContainer>
      </section>
    </>
  );
}
