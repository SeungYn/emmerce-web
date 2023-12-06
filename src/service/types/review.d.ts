export type Review = {
  reviewId: number;
  title: string;
  description: string;
  starScore: number;
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
