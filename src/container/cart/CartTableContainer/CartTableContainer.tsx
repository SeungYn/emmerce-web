'use client';

import CartTable from '@/components/cart/CartTable/CartTable';
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
import { ComponentProps, useCallback, useState } from 'react';

export default function CartTableContainer() {
  return (
    <SSRSuspense fallback={<div>로로딩딩중중</div>}>
      <CartTableSuspense />
    </SSRSuspense>
  );
}

type SuspenseProps = Omit<ComponentProps<typeof CartTable>, 'cartItemList'>;

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
  );
}
