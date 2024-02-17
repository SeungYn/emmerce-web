// 리뷰 날짜 파싱 함수
export function parseReviewDate(date: string) {
  const splitDate = date.split('T');
  const parseDate = splitDate[0];
  const parseTime = splitDate[1].split('.')[0];
  return `${parseDate} ${parseTime}`;
}
