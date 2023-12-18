import CustomCarousel from "../customCarousel";
import { SwiperSlide } from "swiper/react";
import { BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { event } from "../../../types";
import Card from "../card";
import SliderButtons from "./sliderNavButtons";
import { Link } from "react-router-dom";
import { slugify } from "../slug";

const CustomSlider = (props: { events: event[]; title: string }) => {
  return (
    <div className="font-raleway relative  w-[100%] my-6 px-4  text-gray-300">
      <div className="absolute text-6xl z1 grad bg-gradient-to-r pointer-events-none from-black to-transparent w-[20%] h-[90%] top-10"></div>
      <div className="absolute text-6xl z1 grad bg-gradient-to-l pointer-events-none from-black to-transparent w-[50%] h-[90%] top-10 right-[0]"></div>

      <div className="flex items-center justify-between w-full px-8 py-4 ">
        <h1 className="font-medium text-subtitle ">{props.title}</h1>

        <div className="flex flex-row items-center justify-center gap-1 px-6 text-lg">
          <Link to="/events" className="text-sm hover:text-yellow-500">
            Tümü
          </Link>
          <div className="text-xl text-gray-400 ">
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="pl-16">
        <CustomCarousel
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          className="relative"
        >
          {props.events.map((card: event, index: number) => (
            <SwiperSlide key={index}>
              <Card
                title={card.name}
                size="medium"
                image={card.image}
                time={`${card.startTime}-${card.endTime}`}
                venue={card.venue}
                route={`event/${slugify(`${card.name} ${card._id}`)}`}
              />
            </SwiperSlide>
          ))}
          <SliderButtons />
        </CustomCarousel>
      </div>
    </div>
  );
};

export default CustomSlider;
