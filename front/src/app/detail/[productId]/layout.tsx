import { getCategoryList } from '@/service/server/category';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navbar/Navbar/Navbar'), {
  ssr: false,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await getCategoryList();
  return (
    <>
      <Navbar isLogo={false} categoryList={categoryList} />
      {children}
    </>
  );
}
