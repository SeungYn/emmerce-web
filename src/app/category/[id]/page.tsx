import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MainItemListWrapper from '@/components/common/list-wrapper/MainItemListWrapper/MainItemListWrapper';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import MainItemWrapper from '@/components/common/listitem/MainItemWrapper/MainItemWrapper';
import Location from '@/components/common/location/Location';
import ProductListPagination from '@/components/product/common/ProductListPagination/ProductListPagination';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import ListManipulation from '@/components/product/filter/ListManipulation/ListManipulation';
import { serverService } from '@/service/server';
import { sortProductList } from '@/util/lib/product';
import { Metadata } from 'next';

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

export async function generateMetadata({
  params: { id },
}: {
  params: { id: number };
}): Promise<Metadata> {
  const categoryList = await serverService.category.getOriginCategoryList();
  const findCategoryName = categoryList.find((i) => {
    return i.categoryId === Number(id);
  });
  const categoryName = findCategoryName ? findCategoryName.name : '';

  return {
    title: categoryName,
    description: `${categoryName} 관련 상품 정보를 확인하세요.`,
  };
}

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
        <div className='flex justify-between gap-4'>
          <div className='basis-[220px]'>
            <FilterForm productList={data.content} />
          </div>
          <div className='basis-[1044px]'>
            <ListManipulation />
            <div className='mt-4 pl-[2px]'>
              <MainItemListWrapper>
                {filteredList.map((item, i) => (
                  <MainItemWrapper
                    key={item.productId}
                    width={260}
                    height={400}
                    pr={5}
                    pl={5}
                  >
                    <MainItemLink
                      item={item}
                      targetLink={`/detail/${item.productId}`}
                      width={250}
                      height={240}
                    />
                  </MainItemWrapper>
                ))}
              </MainItemListWrapper>
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
