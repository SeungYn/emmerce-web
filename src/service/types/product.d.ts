export type Product = {
  productId: number;
  brand: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  starScore: number;
  titleImg: string;
  likeCount: number;
  totalReviews: number;
};

export type ProductDetail = {
  productId: number;
  name: string;
  detail: string;
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  stockQuantity: number;
  starScore: number;
  titleImg: string;
  detailImgList: string[];
  brand: string;
  enrollTime: string;
  likeCount: number;
  totalReviews: number;
};

export type Paging = {
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
};

export type ProductList = {
  content: Product[];
} & Paging;
