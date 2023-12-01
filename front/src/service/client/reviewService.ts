import { AxiosInstance } from 'axios';
import { GetReviewsRes } from '../types/review';

export default class ReviewService {
  constructor(private axios: AxiosInstance) {}

  async getReviews(productId: number | string, page?: number, size?: number) {
    let query = `/product/${productId}/reviews`;
    if (page && size) query += `?page=${page}&size=${size}`;

    const { data } = await this.axios.get<GetReviewsRes>(query);
    return data;
  }

  // async getReviews(productId: number | string) {
  //   const { data } = await this.axios.get<GetReviewsRes>(
  //     `/product/${productId}/reviews`
  //   );
  //   return data;
  // }
}
