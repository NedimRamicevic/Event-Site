import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import { useSwiper } from "swiper/react";
const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className=" absolute allAbove w-full top-[40%] z-20 flex flex-row justify-around items-center text-white ">
      <div
        onClick={() => swiper.slidePrev()}
        className="left-[0%] cursor-pointer allAbove absolute text-7xl "
      >
        <BsChevronLeft />
      </div>
      <div
        onClick={() => swiper.slideNext()}
        className="allAbove cursor-pointer absolute right-[0%] text-7xl"
      >
        <BsChevronRight />
      </div>
    </div>
  );
};

export default SliderButtons;
