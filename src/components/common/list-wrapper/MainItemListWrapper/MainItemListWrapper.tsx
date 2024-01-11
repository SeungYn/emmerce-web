import { PropsWithChildren } from 'react';

export default function MainItemListWrapper({
  clssName,
  children,
}: PropsWithChildren<{ clssName?: string }>) {
  return (
    <div
      className={`w-full flex flex-shrink-0 flex-wrap mt-4 [&>li:nth-child(n+5)]:mt-2 ${clssName}`}
    >
      {children}
    </div>
  );
}
