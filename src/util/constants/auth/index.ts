// 토큰 이름
export const TOKEN_NAME = {
  access: 'access-token',
  refesh: 'refresh-token',
} as const;

// cookie 기간
export const COOKIE_OPTIONS = {
  'max-age': 60 * 60 * 24 * 7,
} as const;
