import { Image } from "./Image";

interface StandProps {
  image: string;
  title: string;
  content: string;
}

export const Stand = ({ image, title, content }: StandProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px]">
      {/* Images Section */}
      <div className="w-[340px] h-[340px] max-[480px]:w-[300px] max-[480px]:h-[300px]">
        <Image src={image} alt={title} css="w-full h-full object-cover" />
      </div>
      {/* Text Section */}
      <div className="flex flex-col items-center justify-start gap-[10px]">
        <h2 className="font-vietnam font-extrabold text-[30px] text-white">
          {title}
        </h2>
        <p className="text-[18px] text-white font-light max-w-[400px] text-center">
          {content}
        </p>
      </div>
    </div>
  );
};
