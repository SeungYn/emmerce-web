import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import Location from '@/components/common/location/Location';
import ProductListPagination from '@/components/product/common/ProductListPagination/ProductListPagination';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import ListManipulation from '@/components/product/filter/ListManipulation/ListManipulation';
import { getProductListByCategory } from '@/service/server/product';

type Props = {
  params: { id: number };
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
  params: { id },
  searchParams: { keyword, brand, limit, minPrice, maxPrice, page },
}: Props) {
  console.log('paramsId', id);
  const data = await getProductListByCategory({
    categoryId: id,
    keyword,
    brand,
    limit,
    minPrice,
    maxPrice,
    page,
  });
  console.log(data, 'data');

  return (
    <>
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>
      <MaxXLContainer className='mt-4'>
        <div className='flex gap-10'>
          <FilterForm productList={data.content} />
          <div className='w-full'>
            <ListManipulation />
            <div className='mt-4 mx-3'>
              <ul className='w-full flex flex-shrink-0 flex-wrap mt-4 gap-4 '>
                {data.content?.map((item, i) => (
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