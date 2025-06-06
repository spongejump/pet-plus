import { Image } from "./Image";
import images from "../../constants/images";

interface ArrowButtonProps {
  css?: string;
}

export const ArrowButton = ({ css }: ArrowButtonProps) => {
  return (
    <button
      className={`${css} bg-green flex justify-center items-center gap-[20px] rounded-[45px] px-[62px] py-[64px] max-[1920px]:rounded-[45em] max-[1920px]:px-[62em] max-[1920px]:py-[64em] hover:bg-dark-green max-md:px-[100em] max-md:py-[100em] max-md:rounded-[30px] max-sm:px-[40px] max-sm:py-[40px] `}
    >
      <p className="text-white text-[34px] max-[1920px]:text-[34em] max-md:text-[70em] max-sm:text-[23px] font-vietnam  font-bold">
        BROWSE <br /> ANIMALS
      </p>
      <Image
        src={images.white_right_arrow}
        alt=""
        css="w-[30px] max-[1920px]:w-[30em] max-md:w-[70em] max-sm:w-[20px]"
      />
    </button>
  );
};
