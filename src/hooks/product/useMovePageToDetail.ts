'use client';

import { useRouter } from 'next/navigation';

export default function useMovePageToDetail() {
  const router = useRouter();

  const handleMovePage = (productId: number) =>
    router.push(`detail/${productId}`);
  return handleMovePage;
}
