'use client';
import { SlMagnifier } from 'react-icons/sl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FIlterFormAccordion from '@/components/common/accordion/FIlterFormAccordion';
import { categoryRex } from '@/components/common/location/Location';
import NextURLSearchParams from '@/util/lib/urlSearchParams';
import { Product } from '@/service/types/product';
import { filterBrandList } from '@/util/lib/util';
import useCustomRouter from '@/hooks/common/useCustomRouter';

type Props = {
  keyword?: string;
  productList: Product[];
};

export default function FilterForm({ keyword, productList }: Props) {
  const router = useCustomRouter();
  const searchParams = new NextURLSearchParams(useSearchParams());
  const pathname = usePathname();
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

  const pushRoute = (pathname: string, query: string) => {
    router.push(pathname + '?' + query);
  };

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
          <div className='flex border-b border-black mt-4'>
            <input
              type='text'
              className='w-full text-sm py-2 '
              placeholder='브랜드를 검색하세요'
            />
            <SlMagnifier
              className='text-2xl '
              style={{ stroke: 'black', strokeWidth: '5' }}
            />
          </div>
          <ul className='mt-4'>
            {Array.from(filterBrandList(productList)).map((v) => (
              <li key={v as string} className='flex gap-2 items-center'>
                <label className='flex gap-2 items-center pl-2 text-sm text-gray-600 cursor-pointer'>
                  <input
                    type='radio'
                    name='brand'
                    onChange={(e) => {
                      pushRoute(
                        pathname,
                        searchParams.setQueryString('brand', v as string)
                      );
                    }}
                  />{' '}
                  {v as string}
                </label>
              </li>
            ))}
          </ul>
        </FIlterFormAccordion.Item>
      </FIlterFormAccordion>
    </form>
  );
}
