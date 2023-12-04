import { ProductCategoryInfo } from '@/service/types/category';
import { Product } from '@/service/types/product';

// 별점 100점 환산 (측정값-1) * 100/(선택항목 수-1)
export function translateStarScoreToPercent(score: number) {
  return ((score - 1) / 4) * 100;
}

export function combineCateNameAndId({
  name,
  categoryId,
}: ProductCategoryInfo) {
  return name + categoryId;
}

// productlist를 받아 브랜드 명의 배열을 반환하는 함수
export function filterBrandList(productList: Product[]) {
  const set = new Set();
  productList.forEach((v) => set.add(v.brand));

  return set.values();
}
