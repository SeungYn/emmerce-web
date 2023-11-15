'use client';

import { queryConfig } from '@/util/lib/reactQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export default function ReactQueryContext({ children }: PropsWithChildren) {
  const [client, _] = useState(new QueryClient(queryConfig));
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
