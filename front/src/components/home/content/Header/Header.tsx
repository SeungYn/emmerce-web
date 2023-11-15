type Props = {
  title: string;
  subTitle: string;
};
export default function Header({ title, subTitle }: Props) {
  return (
    <div className='flex shrink-0 items-center'>
      <h3 className='text-3xl font-semibold'>{title}</h3>
      <span className='text-gray-400 ml-3'>{subTitle}</span>
    </div>
  );
}
