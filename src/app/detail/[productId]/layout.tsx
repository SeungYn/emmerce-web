import GNB from '@/components/navbar/gnb/GNB/GNB';
import { serverService } from '@/service/server';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await serverService.category.getCategoryList();
  return (
    <>
      <GNB categoryList={categoryList} />
      {children}
    </>
  );
}
