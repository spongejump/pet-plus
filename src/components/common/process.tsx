import { Image } from "./Image";

interface ProcessProps {
  source: string;
  title: string;
  content: string;
  css?: string;
}

export const Process = ({ title, content, source, css }: ProcessProps) => {
  return (
    <div
      className={`${css} relative w-[370px] h-[590px] max-[480px]:w-full max-[480px]:h-full`}
    >
      <Image src={source} alt={title} css="w-full h-full object-contain" />
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[300px]">
        <h3 className="text-[30px] font-vietnam font-bold text-black text-center">
          {title}
        </h3>
        <p className="text-[18px] text-black font-vietnam font-light mt-[5px] text-center w-full">
          {content}
        </p>
      </div>
    </div>
  );
};
