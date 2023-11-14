import { getCategoryList } from '@/service/server/category';

export default async function CategoryContainer() {
  const categoryList = await getCategoryList();
  console.log(categoryList);
  return <div></div>;
}
