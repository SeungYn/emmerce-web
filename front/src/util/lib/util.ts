import { ProductCategoryInfo } from '@/service/types/category';

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
