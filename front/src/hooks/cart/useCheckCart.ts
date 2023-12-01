import storage from '@/db';
import LocalStorage from '@/db/localstorage';
import { CartItem, CheckCartItem } from '@/service/types/cart';
import { localStorageKeys } from '@/util/lib/storageKeys';
import { useCallback, useState } from 'react';

export default function useCheckCart(originCartItemList: CheckCartItem[]) {
  // server에서 받은 cartItemList에 isCheck 속성 추가
  const [checkCartItemList, setCheckCartItemList] = useState<CheckCartItem[]>(
    () => {
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(originCartItemList)
      );

      return [...originCartItemList];
    }
  );

  const handleCheckAllCartItems = useCallback(() => {
    setCheckCartItemList((list) => {
      const result = list.map((item) => ({
        ...item,
        isCheck: true,
      }));
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  }, [setCheckCartItemList]);

  const handleUnCheckAllCartItems = useCallback(() => {
    setCheckCartItemList((list) => {
      const result = list.map((item) => ({
        ...item,
        isCheck: false,
      }));
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  }, [setCheckCartItemList]);

  const handleToggleCartItem = useCallback(
    (cartItem: CheckCartItem) => {
      setCheckCartItemList((list) => {
        const result = list.map((item) => {
          if (item.cartProductId === cartItem.cartProductId)
            return { ...item, isCheck: !item.isCheck };
          return { ...item };
        });
        storage.local.set(
          localStorageKeys.CHECK_CART,
          LocalStorage.translateToJSON(result)
        );
        return result;
      });
    },
    [setCheckCartItemList]
  );

  const handleUpCount = (cartItem: CheckCartItem) => {
    setCheckCartItemList((list) => {
      const result = list.map((item) => {
        if (item.cartProductId === cartItem.cartProductId) {
          return { ...item, totalCount: cartItem.totalCount + 1 };
        }
        return { ...item };
      });

      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  };

  const handleDownCount = (cartItem: CheckCartItem) => {
    setCheckCartItemList((list) => {
      const result = list.map((item) => {
        if (item.cartProductId === cartItem.cartProductId) {
          const countResult = cartItem.totalCount - 1;

          return { ...item, totalCount: countResult < 1 ? 1 : countResult };
        }
        return { ...item };
      });
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  };

  const handleDeleteCartItem = (cartItem: CheckCartItem) => {
    setCheckCartItemList((list) => {
      const result = list.filter(
        (item) => item.cartProductId !== cartItem.cartProductId
      );
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  };

  const handleAddCartItem = (cartItem: CheckCartItem) => {
    setCheckCartItemList((list) => {
      const result = [...list, { ...cartItem }];
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON(result)
      );
      return result;
    });
  };

  const handleClearCart = () => {
    setCheckCartItemList((list) => {
      storage.local.set(
        localStorageKeys.CHECK_CART,
        LocalStorage.translateToJSON('[]')
      );
      return [];
    });
  };

  return {
    checkCartItemList,
    handleAddCartItem,
    handleCheckAllCartItems,
    handleDeleteCartItem,
    handleDownCount,
    handleToggleCartItem,
    handleUnCheckAllCartItems,
    handleUpCount,
    handleClearCart,
  };
}
