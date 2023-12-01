'use client';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { usePathname, useSearchParams } from 'next/navigation';
import FIlterFormAccordion from '@/components/common/accordion/FIlterFormAccordion';
import { categoryRex } from '@/components/common/location/Location';

type Props = {
  keyword?: string;
};

export default function FilterForm({ keyword }: Props) {
  const searchParmas = useSearchParams();
  const pathname = usePathname();
  const mainCateStr = searchParmas.get('mainCate')?.match(categoryRex);
  const subCateStr = searchParmas.get('subCate')?.match(categoryRex);
  const kindStr = searchParmas.get('kind')?.match(categoryRex);
  const keywordParam = searchParmas.get('keyword');
  console.log(pathname, searchParmas.toString(), searchParmas.getAll);
  let title = kindStr
    ? kindStr[1]
    : subCateStr
    ? subCateStr[1]
    : mainCateStr
    ? mainCateStr[1]
    : '';
  if (keywordParam) title = keywordParam;

  return (
    <div className='basis-[20%]'>
      <form>
        <h2 className='text-2xl font-bold border-b border-black py-4'>
          {title}
        </h2>

        {/* <ul>
          <li className='border-b border-gray-300 py-4'>
            <p className='font-semibold flex justify-between items-center '>
              브랜드 <AiOutlinePlus className='text-xl' />
            </p>

            <div className='flex border-b border-black'>
              <input type='text' className='w-full' />
              <SlMagnifier
                className='text-2xl '
                style={{ stroke: 'black', strokeWidth: '10' }}
              />
            </div>
          </li>
        </ul> */}
        <FIlterFormAccordion>
          <FIlterFormAccordion.Item title='브랜드'>
            <div className='flex border-b border-black'>
              <input type='text' className='w-full' />
              <SlMagnifier
                className='text-2xl '
                style={{ stroke: 'black', strokeWidth: '10' }}
              />
            </div>
            <ul>
              <li>
                <label className='pl-2 text-sm text-gray-600'>
                  <input type='checkbox' name='' id='' /> 프로젝트엠
                </label>
              </li>
              <li>
                <label className='pl-2 text-sm text-gray-600'>
                  <input type='checkbox' name='' id='' /> 프로젝트엠
                </label>
              </li>
              <li>
                <label className='pl-2 text-sm text-gray-600'>
                  <input type='checkbox' name='' id='' /> 프로젝트엠
                </label>
              </li>
              <li>
                <label className='pl-2 text-sm text-gray-600'>
                  <input type='checkbox' name='' id='' /> 프로젝트엠
                </label>
              </li>
            </ul>
          </FIlterFormAccordion.Item>
        </FIlterFormAccordion>
      </form>
    </div>
  );
}
