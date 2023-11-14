import Navbar from '@/components/navbar/Navbar/Navbar';
import { getCategoryList } from '@/service/server/category';

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
