'use server';

import { revalidatePath } from 'next/cache';

/** 해당 server-action은 캐쉬된 라우터를 해제 시켜주기 위한 액션 */
export async function revalidateAuthPath() {
  const paths = ['/o', '/auth', '/my'];
  paths.forEach((path) => {
    revalidatePath(path);
  });
}
