import { Image } from "./Image";
import images from "../../constants/images";

interface ArrowButtonProps {
  css?: string;
}

export const ArrowButton = ({ css }: ArrowButtonProps) => {
  return (
    <button
      className={`${css} bg-green flex justify-center items-center gap-[30px] max-xl:gap-[20px] rounded-[45px] px-[62px] py-[64px] max-2xl:px-[40px] max-2xl:py-[40px] hover:bg-dark-green`}
    >
      <p className="text-white text-[34px] max-xl:text-[28px] max-lg:text-[24px] font-vietnam">
        BROWSE <br /> ANIMALS
      </p>
      <Image src={images.white_right_arrow} alt="" css="max-xl:w-[28px]" />
    </button>
  );
};
