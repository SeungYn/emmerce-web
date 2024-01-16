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
  const set = new Set<string>();
  productList?.map((v) => set.add(v.brand));

  return set.values();
}

// 오브젝트에서 원하는 키, 값만 뽑아내는 함수
export function pick<T extends object, K extends keyof T>(
  target: T,
  keys: K[]
) {
  return keys.reduce((obj: Pick<T, K>, key: K) => {
    obj[key] = target[key];
    return obj;
  }, {} as T);
}

export function whereIsHost() {
  return process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_HOST
    : process.env.NEXT_PUBLIC_LOCAL_HOST;
}
