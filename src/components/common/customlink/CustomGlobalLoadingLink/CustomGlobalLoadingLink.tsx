'use client';

import { useGlobalLoading } from '@/store/common/globalLoading';
import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ComponentProps<typeof Link>>;

export default function CustomGlobalLoadingLink(props: Props) {
  const { handleStartLoading } = useGlobalLoading();
  return (
    <Link
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        handleStartLoading(props.href.toString());
      }}
    />
  );
}
