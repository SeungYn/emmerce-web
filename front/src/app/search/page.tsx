import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import Location from '@/components/common/location/Location';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import ProductListPagination from '@/components/product/common/ProductListPagination/ProductListPagination';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import ListManipulation from '@/components/product/filter/ListManipulation/ListManipulation';
import { serverService } from '@/service/server';
import { getCategoryList } from '@/service/server/category';

//export const dynamic = 'force-dynamic';

type Props = {
  searchParams: {
    keyword: string;
    brand: string;
    limit: string;
    minPrice: string;
    maxPrice: string;
    page: string;
  };
};

export default async function page({
  searchParams: { keyword, brand, limit, minPrice, maxPrice, page },
}: Props) {
  const data = await serverService.product.getProductListByKeyword({
    keyword,
    brand,
    limit,
    minPrice,
    maxPrice,
    page,
  });
  const categoryList = await getCategoryList();

  return (
    <>
      {/* GNB */}
      <GNB categoryList={categoryList} />
      {/* location */}
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      {/* search mention */}
      <MaxXLContainer className='mt-6'>
        <h2 className='text-xl'>
          <span className=' font-bold'>{`'${keyword}'`}</span>에 대한
          검색결과입니다.
        </h2>
      </MaxXLContainer>

      <MaxXLContainer className='mt-4'>
        <div className='flex gap-10'>
          <div className='basis-[20%]'>
            <FilterForm keyword={keyword} productList={data.content} />
          </div>
          <div className='w-full'>
            <ListManipulation />
            <div className='mt-4 mx-3'>
              <ul className='w-full flex flex-shrink-0 flex-wrap mt-4 gap-4 '>
                {data.content.map((item, i) => (
                  <li key={item.productId}>
                    <MainItemLink
                      item={item}
                      targetLink={`/detail/${item.productId}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-center mt-4'>
              <ProductListPagination
                pageNumber={data.pageNumber}
                totalPages={data.totalPages}
                first={data.first}
                last={data.last}
                totalElements={data.totalElements}
              />
            </div>
          </div>
        </div>
      </MaxXLContainer>
    </>
  );
}
