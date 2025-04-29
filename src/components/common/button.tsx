export const Button = ({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: string;
}) => {
  return (
    <button className={`${css} px-[50px] py-[18px] rounded-full`}>
      {children}
    </button>
  );
};
