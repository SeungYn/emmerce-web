import Navbar from '@/components/navbar/Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar isLogo={false} />
      {children}
    </>
  );
}
