export type Review = {
  reviewId: number;
  title: string;
  description: string;
  ratings: number;
  reviewImgList: string[];
  memberId: number;
  writer: string;
  writeDate: Date;
};

export type GetReviewsRes = {
  content: Review[];
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
};

export type PostReviewReq = {
  reviewReq: {
    title: string;
    description: string;
    ratings: number;
    orderId: number;
    productId: number;
  };
  reviewImages: File[];
};
