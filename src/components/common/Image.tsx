export const Image = ({
  src,
  css,
  alt,
}: {
  src: string;
  css?: string;
  alt?: string;
}) => {
  return <img src={src} className={`${css}`} alt="" />;
};
