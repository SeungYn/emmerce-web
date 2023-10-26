'use client';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import FIlterFormAccordion from '@/components/common/accordion/FIlterFormAccordion';

type Props = {
  keyword?: string;
};

export default function FilterForm({ keyword }: Props) {
  return (
    <div className='basis-[20%]'>
      <form>
        <h2 className='text-2xl font-bold border-b border-black py-4'>
          개주얼
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
