import { PropsWithChildren } from 'react';

export default function TopBottomPaddingBox({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`py-5 ${className}`}>{children}</div>;
}
