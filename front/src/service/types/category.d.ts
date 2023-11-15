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
