import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import Location from '@/components/common/location/Location';
import ProductListPagination from '@/components/product/common/ProductListPagination/ProductListPagination';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import ListManipulation from '@/components/product/filter/ListManipulation/ListManipulation';
import { serverService } from '@/service/server';
import { sortProductList } from '@/util/lib/product';

type Props = {
  params: { id: number };
  searchParams: {
    keyword: string;
    brand: string;
    limit: string;
    minPrice: string;
    maxPrice: string;
    page: string;
    sortkey: string;
  };
};

export default async function page({
  params: { id },
  searchParams: { keyword, brand, limit, minPrice, maxPrice, page, sortkey },
}: Props) {
  const data = await serverService.product.getProductListByCategory({
    categoryId: id,
    keyword,
    brand,
    limit,
    minPrice,
    maxPrice,
    page,
  });

  const filteredList = sortProductList(sortkey, [...data.content]);

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
                {filteredList.map((item, i) => (
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
