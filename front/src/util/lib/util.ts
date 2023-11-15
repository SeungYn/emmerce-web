// 별점 100점 환산 (측정값-1) * 100/(선택항목 수-1)
export function translateStarScoreToPㄷrcent(score: number) {
  return (score - 1) / 4;
}
