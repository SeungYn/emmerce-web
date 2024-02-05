'use client';

import Image from 'next/image';
import TopBottomPaddingBox from '../../common/TopBottomPaddingBox/TopBottomPaddingBox';
import { ProductDetail } from '@/service/types/product';
import { translateStarScoreToPercent } from '@/util/lib/util';
import CartBtnAndModal from '@/components/cart/CartBtnAndModal/CartBtnAndModal';
import CartMoalContextProvider from '@/context/cart/CartModalContext';
import CustomGlobalLoadingLink from '@/components/common/customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';
import AuthGuardRunterBtn from '@/components/common/button/auth-guard/AuthGuardRouterBtn/AuthGuardRouterBtn';
import DetailZoom from '../DetailZoom/DetailZoom';
import StarScoreView from '@/components/common/star-score/StarScoreView/StarScoreView';
import Link from 'next/link';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { useCallback, useState } from 'react';

type Props = {
  productDetail: ProductDetail;
};

export default function ProductDetailMain({ productDetail }: Props) {
  const {
    brand,
    starScore,
    name,
    originalPrice,
    discountPrice,
    discountRate,
    productId,
    titleImg,
    stockQuantity,
    totalReviews,
    detail,
  } = productDetail;
  const [stockCount, setStockCount] = useState(1);
  const onPlusCount = useCallback(
    (count: number) => {
      if (count >= stockQuantity) {
        alert('최대 수량을 초과하였습니다.');
        return;
      }
      setStockCount((s) => s + 1);
    },
    [stockQuantity]
  );

  const onMinusCount = useCallback((count: number) => {
    if (count <= 1) {
      alert('1개 이상 가능합니다.');
      return;
    }
    setStockCount((s) => s - 1);
  }, []);

  return (
    <section>
      <div className='mb-4'>
        <CustomGlobalLoadingLink href='' className='text-2xl font-bold'>
          {brand}
        </CustomGlobalLoadingLink>
      </div>
      {/* 메인 */}
      <div className='flex shrink-0 gap-4'>
        {/* left */}
        <div className=' basis-[640px] shrink-0'>
          <DetailZoom titleImg={titleImg} />
          <div className='flex items-center text-lg gap-2 pt-4 border-t border-gray-300 mt-4'>
            <p className=' font-semibold'>고객리뷰</p>
            <StarScoreView score={starScore} starWidth={20} starHeight={20} />
            <p className='pr-2 mr-2 border-r border-gray-300 text-sm'>
              {starScore}점
            </p>
            <Link
              href='#p-review'
              className='text-sm border-b border-gray-500 text-gray-500 leading-6'
            >
              리뷰({totalReviews})
            </Link>
          </div>
        </div>
        {/* right */}
        <div className='basis-[640px] text-base'>
          <h2 className='font-semibold text-2xl'>{name}</h2>
          <TopBottomPaddingBox className='border-b border-gray-300'>
            <div className='flex shrink-0 items-center '>
              <span className='basis-[140px]'>판매가</span>
              <div className='flex items-end gap-4'>
                <h3 className='text-3xl font-semibold'>
                  {discountPrice.toLocaleString()}원
                </h3>
                <span className='text-lg text-gray-400 line-through'>
                  {originalPrice.toLocaleString()}원
                </span>
                <h3 className='text-3xl text-red-500 font-semibold'>
                  {discountRate}%
                </h3>
              </div>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>혜택안내</p>
            <div className='flex shrink-0 items-center pb-2'>
              <span className='basis-[140px]'>카드혜택</span>
              <p className='text-gray-400'>무이자 할부혜택 안내</p>
            </div>
            <div className='flex shrink-0 items-center'>
              <span className='basis-[140px]'>멤버십 포인트</span>
              <p className='text-gray-400'>19P적립</p>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>배송안내</p>
            <div className='flex shrink-0 items-center pb-2'>
              <span className='basis-[140px]'>배송비</span>
              <p className='text-gray-400'>무료</p>
            </div>
            <div className='flex shrink-0 items-center'>
              <span className='basis-[140px]'>발송예정일</span>
              <p className='text-gray-400'>평균 0.3일 이내 발송</p>
            </div>
          </TopBottomPaddingBox>

          <TopBottomPaddingBox className='border-b border-gray-300'>
            <p className='font-semibold pb-2'>구매안내</p>
            <div className='flex shrink-0 items-center '>
              <span className='basis-[140px]'>최대구매수량</span>
              <p className='text-gray-400'>1회 10개 / 1인 10개</p>
            </div>
            <div className='flex shrink-0 items-center '>
              <span className='basis-[140px]'>남은수량</span>
              <p className='text-gray-400'>{stockQuantity}개</p>
            </div>
          </TopBottomPaddingBox>

          {/* <TopBottomPaddingBox className='border-b border-gray-300'>
            <div className='flex '>
              <p className='basis-[140px]'>색상</p>
              <select
                className='w-full border border-gray-400'
                placeholder='색상 옵션을 선택해 주세요.'
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div className='flex pt-6'>
              <p className='basis-[140px]'>사이즈</p>
              <select
                className='w-full border border-gray-400'
                placeholder='사이즈 옵션을 선택해 주세요.'
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </TopBottomPaddingBox> */}
          <TopBottomPaddingBox className='border-b border-gray-300'>
            <div className='flex justify-between'>
              <p className='font-semibold pb-2'>개수</p>
              <div className='text-xl flex items-center'>
                <button
                  onClick={() => onMinusCount(stockCount)}
                  className='text-4xl'
                >
                  <CiSquareMinus />
                </button>
                <span className='inline-block w-6 text-center'>
                  {stockCount}
                </span>
                <button
                  onClick={() => onPlusCount(stockCount)}
                  className='text-4xl'
                >
                  <CiSquarePlus />
                </button>
              </div>
            </div>
          </TopBottomPaddingBox>
          <div className='flex pt-5'>
            <CartMoalContextProvider>
              <CartBtnAndModal productId={productId} stockCount={stockCount} />
            </CartMoalContextProvider>
            <AuthGuardRunterBtn
              targetRouterHref={`/o/order/${productId}?stockCount=${stockCount}`}
              className='basis-[50%] h-[53px] border border-black font-medium text-xl text-white bg-black flex justify-center items-center'
            >
              바로구매
            </AuthGuardRunterBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
