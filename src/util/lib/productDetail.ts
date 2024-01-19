// 스크롤 이벤트 타겟이 될 dom id
export type ScrollTargetName = 'info' | 'review' | 'qna' | 'delivery';
export const SCROLL_TARGET_ID = {
  info: 'p-info',
  review: 'p-review',
  qna: 'p-qna',
  delivery: 'p-delivery',
};

export const INFOTAB_NUMBER: { [key in ScrollTargetName]: number } = {
  info: 0,
  review: 1,
  qna: 2,
  delivery: 3,
} as const;
