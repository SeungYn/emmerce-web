import Navbar from '@/components/navbar/Navbar/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar isLogo={false} />
      {children}
    </>
  );
}
