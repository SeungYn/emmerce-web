export type Category = {
  categoryId: number;
  tier: number;
  name: string;
  code: string;
  parentCode: string;
};

export type CategoryList = {
  mainCategory: Category;
  subCategories: {
    subCategory: Category;
    kinds: Category[];
  }[];
}[];

export type ProductCategoryInfo = {
  categoryId: number;
  tier: number;
  name: string;
};

export type RecommendCategory = { categoryId: number; name: string };
