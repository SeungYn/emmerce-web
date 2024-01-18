import { PropsWithChildren } from 'react';
// 컴포지션 패턴
export default function InformationTable({ children }: PropsWithChildren) {
  return <div className='pb-10'>{children}</div>;
}
InformationTable.Header = Header;
InformationTable.Body = Body;
InformationTable.FirstColumn = FirstColumn;
InformationTable.SecondColumn = SecondColumn;

type HeaderProps = {
  title: string;
};
function Header({ title }: HeaderProps) {
  return <h3 className='text-lg p-2 tracking-wide'>{title}</h3>;
}

function Body({ children }: PropsWithChildren) {
  return (
    <div
      className='border-t border-gray-400'
      style={{ display: 'grid', gridTemplateColumns: '1.5fr 5fr' }}
    >
      {children}
    </div>
  );
}

function FirstColumn({ children }: PropsWithChildren) {
  return (
    <div className='p-4  bg-gray-200 border-b border-gray-300'>{children}</div>
  );
}

function SecondColumn({ children }: PropsWithChildren) {
  return (
    <div className='p-4 border-b border-gray-300 text-sm text-gray-400'>
      {children}
    </div>
  );
}
