import GlobalFooter from '@/components/common/footer/GlobalFooter/GlobalFooter';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className='min-h-[70vh]'>{children}</section>
      <GlobalFooter />
    </>
  );
}
