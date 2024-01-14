import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import Location from '@/components/common/location/Location';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import { serverService } from '@/service/server';

export default async function layout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: number | string };
}) {
  const categoryList = await serverService.category.getCategoryList();
  const data = await serverService.product.getProductListByCategory({
    categoryId: id,
  });

  return (
    <>
      <GNB categoryList={categoryList} />
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      <section className='min-h-[70vh]'>
        <MaxXLContainer className='mt-4'>
          <div className='flex justify-between gap-4'>
            <div className='basis-[220px]'>
              <FilterForm productList={data.content} />
            </div>
            <div className='basis-[1044px]'>{children}</div>
          </div>
        </MaxXLContainer>
      </section>
      <GlobalFooter />
    </>
  );
}
