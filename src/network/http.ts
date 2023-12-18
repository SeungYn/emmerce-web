import { createAxiosInstance } from './client';
import { HttpServer } from './server';

const endPoint =
  process.env.PRODUCTION_END_POINT ||
  process.env.NEXT_PUBLIC_PRODUCTION_END_POINT ||
  '';
const localEndPoint = 'http://localhost:8088';

//클라이언트 axios 인스턴스
export const axiosInstance = createAxiosInstance(endPoint);
// 서버 fetch 인스턴스
export const fetchInstance = new HttpServer(endPoint);
