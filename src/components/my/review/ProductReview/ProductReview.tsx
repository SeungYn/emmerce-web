'use client';
import { GoPlus } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './ProductReview.module.css';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Image from 'next/image';
import { ReviewForm } from '@/container/my/review/ProductReviewModalContainer/ProductReviewModalContainer';
import { OrderHistoryItem } from '@/service/types/order';

type Props = {
  hiddenFileRef: RefObject<HTMLInputElement>;
  reviewForm: ReviewForm;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setReviewForm: Dispatch<SetStateAction<ReviewForm>>;
  orderHistoryItem: OrderHistoryItem;
  handleCloseModal: () => void;
  handleSubmit: () => void;
  isPending: boolean;
};

export default function ProductReview({
  hiddenFileRef,
  reviewForm,
  onChange,
  setReviewForm,
  orderHistoryItem,
  handleCloseModal,
  handleSubmit,
  isPending,
}: Props) {
  return (
    <section
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className='fixed w-full h-screen top-0 flex justify-center items-center z-10'
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className='flex-shrink-0 w-[1080px] bg-white rounded-xl'
      >
        <header className='flex justify-between p-4 text-xl border-b border-b-gray-300'>
          <p aria-hidden></p>
          <h2>리뷰 작성</h2>
          <button className='cursor-pointer' onClick={() => handleCloseModal()}>
            <AiOutlineClose />
          </button>
        </header>
        {/* 리뷰 작성 영역 */}
        <div className='p-6 flex flex-col gap-2'>
          <div>
            <strong className='text-xl'>상품 정보</strong>
            <div className='flex shrink-0 justify-self-start gap-4 '>
              <Image
                src={orderHistoryItem.titleImg}
                alt='주문한 상품 이미지'
                width={100}
                height={100}
                className='w-[100px] h-[100px] object-contain shrink-0 grow-0'
                sizes='100px'
              />
              <div className='flex-grow '>
                <p className='text-gray-500'>{orderHistoryItem.brand}</p>
                <p className='font-blod line-clamp-2'>
                  {orderHistoryItem.name}
                </p>
                <p>옵션</p>
              </div>
            </div>
          </div>

          <label className='flex flex-col'>
            <strong className='text-xl'>제목</strong>
            <input
              type='text'
              className='border border-gray-300 p-1'
              name='title'
              value={reviewForm.title}
              onChange={onChange}
            />
          </label>
          <label className='flex flex-col'>
            <strong className='text-xl'>별점</strong>
            <div className={styles.reviewParent}>
              <div
                className={`${styles.reviewStarFive} ${
                  reviewForm.ratings === 5 ? styles.reviewActive : ''
                }`}
                onClick={() => setReviewForm((f) => ({ ...f, ratings: 5 }))}
              ></div>
              <div
                className={`${styles.reviewStarFour} ${
                  reviewForm.ratings === 4 ? styles.reviewActive : ''
                }`}
                onClick={() => setReviewForm((f) => ({ ...f, ratings: 4 }))}
              ></div>
              <div
                className={`${styles.reviewStarThree} ${
                  reviewForm.ratings === 3 ? styles.reviewActive : ''
                }`}
                onClick={() => setReviewForm((f) => ({ ...f, ratings: 3 }))}
              ></div>
              <div
                className={`${styles.reviewStarTwo} ${
                  reviewForm.ratings === 2 ? styles.reviewActive : ''
                }`}
                onClick={() => setReviewForm((f) => ({ ...f, ratings: 2 }))}
              ></div>
              <div
                className={`${styles.reviewStarOne} ${
                  reviewForm.ratings === 1 ? styles.reviewActive : ''
                }`}
                onClick={() => setReviewForm((f) => ({ ...f, ratings: 1 }))}
              ></div>
            </div>
          </label>
          <label className='flex flex-col'>
            <strong className='text-xl'>내용</strong>
            <textarea
              name='description'
              onChange={onChange}
              value={reviewForm.description}
              className='border border-gray-300 p-1 outline-none resize-none text-sm'
              rows={10}
            />
          </label>
          <label className='flex flex-col'>
            <strong className='text-xl'>상품 사진</strong>
            <input
              type='file'
              ref={hiddenFileRef}
              style={{ display: 'none' }}
              accept={'image/gif, image/jpeg, image/png'}
              onChange={onChange}
              name={'file'}
              multiple
            />
            <div className='flex '>
              {reviewForm.reviewImageSrc.map((src) => (
                /* eslint-disable @next/next/no-img-element */
                <img
                  src={src}
                  key={src}
                  className='h-[120px] w-[120px]'
                  alt='선택 파일 이미지'
                />
              ))}

              <button
                className='bg-gray-200 w-16 h-16 flex justify-center items-center cursor-pointer'
                type='button'
                onClick={() => hiddenFileRef.current?.click()}
              >
                <GoPlus className='text-2xl text-gray-400' />
              </button>
            </div>
          </label>
          <div className='text-center mt-2 '>
            <div className='relative inline-block'>
              <button
                className='bg-black text-white py-2 px-8 text-sm disabled:bg-slate-200'
                disabled={isPending}
              >
                {isPending ? '후기 등록중' : '등록'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
