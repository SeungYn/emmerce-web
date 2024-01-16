'use client';
import { useSearchParams } from 'next/navigation';
import FIlterFormAccordion from '@/components/common/accordion/FIlterFormAccordion';
import { categoryRex } from '@/components/common/location/Location';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { Product } from '@/service/types/product';
import PriceDoubleSliderContainer from '@/container/product/filter/PriceDoubleSliderContainer';
import BrandFilterContainer from '@/container/product/filter/BrandFilterContainer';

type Props = {
  keyword?: string;
  productList: Product[];
};

export default function FilterForm({ keyword, productList }: Props) {
  const searchParams = new NextURLSearchParams(useSearchParams());
  const mainCateStr = searchParams
    .getQueryString('mainCate')
    ?.match(categoryRex);
  const subCateStr = searchParams.getQueryString('subCate')?.match(categoryRex);
  const kindStr = searchParams.getQueryString('kind')?.match(categoryRex);

  let title = kindStr
    ? kindStr[1]
    : subCateStr
    ? subCateStr[1]
    : mainCateStr
    ? mainCateStr[1]
    : '';

  return (
    <form>
      <div className='border-b border-black py-4'>
        {keyword ? (
          <h2 className=' '>
            {' '}
            <span className='text-red-500 font-medium'>
              {productList.length}
            </span>
            개의 상품
          </h2>
        ) : (
          <h2 className='text-2xl font-bold '>{title}</h2>
        )}
      </div>
      <FIlterFormAccordion>
        <FIlterFormAccordion.Item title='브랜드'>
          <BrandFilterContainer productList={productList} />
        </FIlterFormAccordion.Item>
        <FIlterFormAccordion.Item title='가격'>
          <PriceDoubleSliderContainer />
        </FIlterFormAccordion.Item>
      </FIlterFormAccordion>
    </form>
  );
}
