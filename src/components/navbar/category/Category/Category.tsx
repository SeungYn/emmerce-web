'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Category.module.css';
import { Category, CategoryList } from '@/service/types/category';
import Link from 'next/link';

type Props = {
  categoryList: CategoryList;
};

export default function Category({ categoryList }: Props) {
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category>(
    categoryList[0].mainCategory
  );

  const toggleCategory = useCallback(() => {
    setIsOpenCategory((f) => !f);
  }, []);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node) &&
        isOpenCategory
      ) {
        toggleCategory();
      }
    };
    document.addEventListener('click', eventHandler);

    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, [toggleCategory, isOpenCategory]);

  return (
    <section className='relative' ref={categoryRef}>
      <div className='flex flex-grow shrink-0 justify-between  px-1 border-b border-gray-300 py-2'>
        <div className='flex shrink-0 justify-between w-full px-2 font-bold text-sm max-w-screen-xl mx-auto'>
          <div className='flex py-2 shrink-0'>
            <div
              className='flex items-center border-r border-gray-200 pr-6'
              role='button'
              onClick={toggleCategory}
            >
              <GiHamburgerMenu className='text-2xl' />
              <span className='px-2'>전체카테고리</span>
              <MdOutlineKeyboardArrowUp
                className={`text-xl ${
                  isOpenCategory ? styles.categoryOpen : styles.categoryOff
                }`}
              />
            </div>

            <ul className='flex items-center shrink-0 [&>*]:px-5'>
              <li>베스트</li>
              <li>럭키딜</li>
              <li>스파오아울렛</li>
              <li>모던하우스</li>
              <li>더데이걸</li>
              <li>백화점</li>
            </ul>
          </div>

          <div className='flex items-center'>이벤트•혜택</div>
        </div>
      </div>

      <div
        className={`absolute w-full text-sm text-gray-500 shadow-md  z-50 bg-white py-6 ${
          isOpenCategory ? 'block' : 'hidden'
        }`}
      >
        <nav className='relative mx-auto max-w-screen-xl px-2'>
          {/* 이랜드 기준 기본 height 458px 내용이 넘치면 528px */}
          <ul className='[&>*]:leading-7 border-r border-gray-200 pr-10 w-44 h-[458px]'>
            {categoryList.map((cate) => {
              return (
                <li key={cate.mainCategory.code}>
                  <Link
                    href={`/category/${cate.mainCategory.categoryId}?mainCate=${cate.mainCategory.name}${cate.mainCategory.categoryId}`}
                    onMouseEnter={() => {
                      setCurrentCategory(cate.mainCategory);
                    }}
                    onClick={() => setIsOpenCategory(false)}
                    className='relative w-full inline-block'
                  >
                    {cate.mainCategory.name}
                    {currentCategory.code === cate.mainCategory.code ? (
                      <MdKeyboardArrowRight className='absolute top-[50%] -translate-y-1/2 right-0 text-xl text-red-600' />
                    ) : (
                      ''
                    )}
                  </Link>

                  {/* 현재 카테고리이면 block 아니면 hidden */}
                  <div
                    className={`absolute left-44 top-0 right-0  flex flex-col pl-10 text-xs ${
                      currentCategory.code === cate.mainCategory.code
                        ? 'block'
                        : 'hidden'
                    }`}
                  >
                    {cate.subCategories.map((subCate) => (
                      <div
                        key={subCate.subCategory.code + cate.mainCategory.code}
                        className='flex py-2 border-b border-gray-200'
                      >
                        <Link
                          href={`/category/${subCate.subCategory.categoryId}?mainCate=${cate.mainCategory.name}${cate.mainCategory.categoryId}&subCate=${subCate.subCategory.name}${subCate.subCategory.categoryId}`}
                          className='font-bold w-32 text-black'
                          onClick={() => setIsOpenCategory(false)}
                        >
                          {subCate.subCategory.name}
                        </Link>
                        <ul className='flex [&>*]:mr-6'>
                          {subCate.kinds.map((kind) => (
                            <Link
                              key={kind.code}
                              href={`/category/${kind.categoryId}?mainCate=${cate.mainCategory.name}${cate.mainCategory.categoryId}&subCate=${subCate.subCategory.name}${subCate.subCategory.categoryId}&kind=${kind.name}${kind.categoryId}`}
                              onClick={() => setIsOpenCategory(false)}
                            >
                              <li>{kind.name}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

type MainCategories = (typeof categories)[number]['mainCategory'];

const categories = [
  {
    mainCategory: '캐주얼/유니섹스',
    subCategories: [
      {
        subCategory: '티셔츠',
        kinds: [
          '긴팔',
          '루즈핏/롱',
          '맨투맨',
          '후드',
          '터틀넥/폴라',
          '민소매',
          '카라',
          '반팔',
        ],
      },
      {
        subCategory: '가디건',
        kinds: ['기본', '숏', '오버핏/롱'],
      },

      {
        subCategory: '니트/스웨터',
        kinds: [
          '라운드넥',
          '니트/가디건세트',
          '오버핏/롱',
          '터틀넥/폴라',
          '울/캐시미어',
        ],
      },
      {
        subCategory: '청바지',
        kinds: [
          '슬림/일자',
          '카고/조거',
          '테이퍼드',
          '스키니',
          '와이드/부츠컷',
          '반바지',
        ],
      },
    ],
  },
  {
    mainCategory: '여성의류',
    subCategories: [
      {
        subCategory: '니트/스웨터',
        kinds: [
          '라운드넥',
          '니트/가디건세트',
          '오버핏/롱',
          '터틀넥/폴라',
          '울/캐시미어',
        ],
      },
      {
        subCategory: '청바지',
        kinds: [
          '슬림/일자',
          '카고/조거',
          '테이퍼드',
          '스키니',
          '와이드/부츠컷',
          '반바지',
        ],
      },
    ],
  },
] as const;

{
  /* 1차 카테고리 2차 카테고리까지 포함 */
}
//  <li>
//  <a href='/'>캐주얼/유니섹스</a>
//  <div className='absolute left-44 top-0 right-0  flex flex-col pl-10 text-xs'>
// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32 text-black'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-6'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-6'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>

// 	 {/* 2차 카테고리 */}
// 	 <div className='flex py-2 border-b border-gray-200'>
// 		 <a href='#' className='font-bold w-32'>
// 			 티셔츠
// 		 </a>
// 		 <ul className='flex [&>*]:mr-4'>
// 			 <a>
// 				 <li>긴팔</li>
// 			 </a>
// 			 <a>
// 				 <li>루즈핏/롱</li>
// 			 </a>
// 			 <a>
// 				 <li>맨투맨</li>
// 			 </a>
// 			 <a>
// 				 <li>후드</li>
// 			 </a>
// 			 <a>
// 				 <li>터틀넥/폴라</li>
// 			 </a>
// 			 <a>
// 				 <li>민소매</li>
// 			 </a>
// 		 </ul>
// 	 </div>
//  </div>
// </li>

// <li>
//  <a>여성의류</a>
// </li>
// <li>
//  <a>유아동패션</a>
// </li>
// <li>
//  <a>언더웨어/잠옷</a>
// </li>
// <li>
//  <a>레저/스포츠</a>
// </li>
// <li>
//  <a>슈즈/가방/잡화</a>
// </li>
// <li>
//  <a>주얼리/시계</a>
// </li>
// <li>
//  <a>뷰티</a>
// </li>
// <li>
//  <a>해외명품</a>
// </li>
// <li>
//  <a>남성의류</a>
// </li>
