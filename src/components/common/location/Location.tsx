'use client';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import CustomGlobalLoadingLink from '../customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';

// 나중에 location 받아오면 HOME를 제외한 아이템 이전에 화살표 넣어주는 로직 필요
export const categoryRex = /(\D+)(\d+)/;

type CateReg = [string, string, string, RegExpMatchArray];

export default function Location() {
  const searchParmas = useSearchParams();
  const searchkeyword = searchParmas.get('keyword');
  const mainCateStr = searchParmas.get('mainCate')?.match(categoryRex);
  const subCateStr = searchParmas.get('subCate')?.match(categoryRex);
  const kindStr = searchParmas.get('kind')?.match(categoryRex);

  return (
    <ul className='text-sm text-gray-400 flex items-center '>
      <a>
        <li>HOME</li>
      </a>

      {searchkeyword && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>
          <li>통합검색</li>
        </>
      )}
      {mainCateStr && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <CustomGlobalLoadingLink
              href={`/category/${mainCateStr[2]}?mainCate=${filterCate(
                mainCateStr
              )}`}
            >
              {mainCateStr[1]}
            </CustomGlobalLoadingLink>
          </li>
        </>
      )}
      {subCateStr && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <CustomGlobalLoadingLink
              href={`/category/${subCateStr[2]}?mainCate=${filterCate(
                mainCateStr!
              )}&subCate=${filterCate(subCateStr)}`}
            >
              {subCateStr[1]}
            </CustomGlobalLoadingLink>
          </li>
        </>
      )}
      {kindStr && (
        <>
          <li className='px-4'>
            <MdKeyboardArrowRight />
          </li>

          <li>
            <CustomGlobalLoadingLink
              href={`/category/${kindStr[2]}?mainCate=${filterCate(
                mainCateStr!
              )}&subCate=${filterCate(subCateStr!)}&kind=${filterCate(
                kindStr
              )}`}
            >
              {kindStr[1]}
            </CustomGlobalLoadingLink>
          </li>
        </>
      )}
    </ul>
  );
}

function filterCate(str: RegExpMatchArray) {
  return str[1] + str[2];
}
