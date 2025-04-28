interface ProcessProps {
  source: string;
  title: string;
  content: string;
  css?: string;
}

export const Process = ({ title, content, source, css }: ProcessProps) => {
  return (
    <div
      className={`${css} flex flex-col items-center bg-light-green h-[560px] w-[280px] rounded-[142px]`}
    >
      <div className="flex w-[350px] h-[350px] flex-col pt-[60px]">
        <div className="w-full h-full">
          <img
            src={source}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[30px] font-vietnam font-bold text-black text-center">
            {title}
          </h3>
          <p className="text-[18px] text-black font-light mt-[5px] text-center max-w-[300px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
