import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import Location from '@/components/common/location/Location';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import { serverService } from '@/service/server';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await serverService.category.getCategoryList();
  return (
    <>
      {/* GNB */}
      <GNB categoryList={categoryList} />
      {/* location */}
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      <section className='min-h-[70vh]'>{children}</section>
      <GlobalFooter />
    </>
  );
}
