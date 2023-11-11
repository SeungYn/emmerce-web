import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navbar/Navbar/Navbar'), {
  ssr: false,
});

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar isLogo={false} />
      {children}
    </>
  );
}
