import { AxiosInstance } from 'axios';
import { GetReviewsRes, PostReviewReq } from '../types/review';

export default class ReviewService {
  constructor(private axios: AxiosInstance) {}

  async getReviews(productId: number | string, page?: number, size?: number) {
    let query = `/product/${productId}/reviews`;
    if (page && size) query += `?page=${page}&size=${size}`;

    const { data } = await this.axios.get<GetReviewsRes>(query);
    return data;
  }

  async postReview({ reviewReq, reviewImages }: PostReviewReq) {
    const query = `/review`;
    const formdata = new FormData();
    console.log(reviewReq, reviewImages);
    formdata.append(
      'reviewReq',
      new Blob([JSON.stringify(reviewReq)], {
        type: 'application/json',
      })
    );

    for (const img of reviewImages) {
      formdata.append('reviewImages', img);
    }

    const { data } = await this.axios.post<unknown>(query, formdata);
    return data;
  }
}
