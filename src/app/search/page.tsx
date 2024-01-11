import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';
import MainItemListWrapper from '@/components/common/list-wrapper/MainItemListWrapper/MainItemListWrapper';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import MainItemWrapper from '@/components/common/listitem/MainItemWrapper/MainItemWrapper';
import Location from '@/components/common/location/Location';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import ProductListPagination from '@/components/product/common/ProductListPagination/ProductListPagination';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import ListManipulation from '@/components/product/filter/ListManipulation/ListManipulation';
import { serverService } from '@/service/server';
import { sortProductList } from '@/util/lib/product';
import { Metadata } from 'next';

//export const dynamic = 'force-dynamic';

type Props = {
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
  searchParams: { keyword },
}: Props): Promise<Metadata> {
  return {
    title: keyword,
    description: `${keyword} 관련 상품 정보를 확인하세요.`,
  };
}

export default async function page({
  searchParams: { keyword, brand, limit, minPrice, maxPrice, page, sortkey },
}: Props) {
  const data = await serverService.product.getProductListByKeyword({
    keyword,
    brand,
    limit,
    minPrice,
    maxPrice,
    page,
  });
  const categoryList = await serverService.category.getCategoryList();
  const filteredList = sortProductList(sortkey, [...data.content]);

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
        <div className='flex justify-between gap-4'>
          <div className='basis-[220px]'>
            <FilterForm keyword={keyword} productList={data.content} />
          </div>
          <div className='basis-[1044px]'>
            <ListManipulation />
            <div className='mt-4 pl-[2px]'>
              <MainItemListWrapper>
                {filteredList.map((item, i) => (
                  <MainItemWrapper
                    key={item.productId}
                    width={265}
                    height={400}
                    pr={5}
                    pl={5}
                  >
                    <MainItemLink
                      item={item}
                      targetLink={`/detail/${item.productId}`}
                      width={255}
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
