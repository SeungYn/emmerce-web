import { useRouter } from 'next/navigation';

export default function usePageMove() {
  const router = useRouter();

  const handleMovePage = (path: string) => router.push(path);
  return handleMovePage;
}
