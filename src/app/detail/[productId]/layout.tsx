import GNB from '@/components/navbar/gnb/GNB/GNB';
import { getCategoryList } from '@/service/server/category';

export default async function RootLayout({
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
