export const Button = ({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: string;
}) => {
  return (
    <button
      className={`${css} px-[50px] py-[18px] rounded-full max-xl:px-[30px] max-xl:py-[12px] max-lg:px-[20px] max-lg:py-[10px]`}
    >
      {children}
    </button>
  );
};
