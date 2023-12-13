'use client';

import CartTable from '@/components/cart/CartTable/CartTable';
import CustomGlobalLoadingLink from '@/components/common/customlink/CustomGlobalLoadingLink/CustomGlobalLoadingLink';
import SSRSuspense from '@/components/common/util/SSRSuspense';
import {
  useCartCheckAllItems,
  useCartClear,
  useCartDeleteItem,
  useCartDownCountItem,
  useCartItemListSuspense,
  useCartToggleCheckItem,
  useCartUnCheckAllItems,
  useCartUpCountItem,
} from '@/hooks/api/cart/useCart';
import { useRouter } from 'next/navigation';

export default function CartTableContainer() {
  return (
    <SSRSuspense fallback={<div>로로딩딩중중</div>}>
      <CartTableSuspense />
    </SSRSuspense>
  );
}

function CartTableSuspense() {
  const router = useRouter();
  const { data } = useCartItemListSuspense();
  const { mutate: handleToggleCartItem } = useCartToggleCheckItem();
  const { mutate: handleDeleteCartItem } = useCartDeleteItem();
  const { mutate: handleCheckAllCartItems } = useCartCheckAllItems();
  const { mutate: handleUnCheckAllCartItems } = useCartUnCheckAllItems();
  const { mutate: handleUpCountCartItem } = useCartUpCountItem();
  const { mutate: handleDownCountCartItem } = useCartDownCountItem();
  const { mutate: handleClearCart } = useCartClear();

  return (
    <>
      <CartTable
        cartItemList={data}
        handleToggleCartItem={handleToggleCartItem}
        handleDeleteCartItem={handleDeleteCartItem}
        handleCheckAllCartItems={handleCheckAllCartItems}
        handleUnCheckAllCartItems={handleUnCheckAllCartItems}
        handleUpCountCartItem={handleUpCountCartItem}
        handleDownCountCartItem={handleDownCountCartItem}
        handleClearCart={handleClearCart}
        handleMoveOrderPage={() => {
          router.push('/o/order');
        }}
      />
      {/* button section */}
      <div className='mt-4 flex justify-end gap-4'>
        <CustomGlobalLoadingLink
          href={'/'}
          className='text-xl py-6 px-16 rounded-full text-black font-bold border border-gray-400'
        >
          계속 쇼핑하기
        </CustomGlobalLoadingLink>
        {data.length > 0 && (
          <CustomGlobalLoadingLink
            href='/o/order'
            className='text-xl py-6 px-24 rounded-full text-white font-bold brightness-95'
            style={{
              background:
                'linear-gradient(90deg, rgba(255,85,9,1) 0%, rgba(255,0,0,1) 49%, rgba(255,0,247,1) 100%)',
            }}
          >
            구매하기
          </CustomGlobalLoadingLink>
        )}
      </div>
    </>
  );
}
