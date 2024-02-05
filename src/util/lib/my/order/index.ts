// 주문내역 날짜 관련 유틸 함수, 상수
export const oneWeekMillseconds = 604800016.56;
export const oneMonthMillseconds = 2629800000;
export const threeMonthMillseconds = 7889400000;
export const sixMonthMillseconds = 15778800000;
export const oneDayMillseconds = 86400000;

export function getDifferenceDate(data: Date, period: number) {
  const startDate = new Date(data);
  const result = startDate.getTime() - period;
  return new Date(result);
}
export function translateYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 === 13 ? 1 : date.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
