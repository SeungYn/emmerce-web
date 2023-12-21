import { Product } from '@/service/types/product';

export function sortProductList(
  key: string | number | undefined,
  list: Product[]
) {
  if (key == undefined) return list;
  key = parseInt(key.toString());
  switch (key) {
    case ProductSortOrderKey.lowPrice:
      return list.sort((a, b) => a.discountPrice - b.discountPrice);
    case ProductSortOrderKey.highPrice:
      return list.sort((a, b) => b.discountPrice - a.discountPrice);
    case ProductSortOrderKey.likeCount:
      return list.sort((a, b) => b.likeCount - a.likeCount);
    case ProductSortOrderKey.highDiscountRate:
      return list.sort((a, b) => b.discountRate - a.discountRate);
    default:
      return list;
  }
}

export enum ProductSortOrderKey {
  lowPrice = 10,
  highPrice = 20,
  likeCount = 30,
  highDiscountRate = 40,
}
