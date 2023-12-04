import GNB from '@/components/navbar/gnb/GNB/GNB';
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
      <GNB categoryList={categoryList} />
      {children}
    </>
  );
}
