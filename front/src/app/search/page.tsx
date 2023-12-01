import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import MainItemLink from '@/components/common/listitem/MainItemLink/MainItemLink';
import Location from '@/components/common/location/Location';
import GNB from '@/components/navbar/gnb/GNB/GNB';
import FilterForm from '@/components/product/filter/FilterForm/FilterForm';
import { getCategoryList } from '@/service/server/category';
import { getProductListByCategory } from '@/service/server/product';
import { searchItem } from '@/util/mock/data/item';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
  params: { id: number };
};

export default async function page() {
  const data = searchItem;
  const categoryList = await getCategoryList();
  const currentBlock = Math.floor(data.pageNumber / 10) + 1;
  const pageArr = Array.from(
    { length: 10 >= data.totalPages ? data.totalPages : 10 },
    (_, i) => i + currentBlock
  );

  return (
    <>
      {/* GNB */}
      <GNB categoryList={categoryList} />
      {/* location */}
      <MaxXLContainer className='mt-4'>
        <Location />
      </MaxXLContainer>

      <MaxXLContainer className='mt-4'>
        <div className='flex gap-10'>
          <FilterForm />
          <div className='w-full'>
            <div className='flex justify-between text-sm text-gray-500 border-b border-gray-300 pb-5'>
              <ul className='flex gap-8'>
                <li>낮은가격순</li>
                <li>낮은가격순</li>
                <li>낮은가격순</li>
                <li>낮은가격순</li>
                <li>낮은가격순</li>
                <li>낮은가격순</li>
              </ul>
              <select>
                <option value=''>10개씩보기</option>
                <option value=''>20개씩보기</option>
                <option value=''>30개씩보기</option>
                <option value=''>40개씩보기</option>
                <option value=''>50개씩보기</option>
                <option value=''>60개씩보기</option>
              </select>
            </div>
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
              <ul className='flex gap-4'>
                {!data.first && (
                  <>
                    <li>
                      <Link href=''>이이전</Link>
                    </li>
                    <li>
                      <Link href=''>이전</Link>
                    </li>
                  </>
                )}
                {pageArr.map((v) => (
                  <li key={v}>
                    <Link href=''>{v}</Link>
                  </li>
                ))}
                {!data.last && (
                  <>
                    <li>
                      <Link href=''>다음</Link>
                    </li>
                    <li>
                      <Link href=''>다다음</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </MaxXLContainer>
    </>
  );
}
