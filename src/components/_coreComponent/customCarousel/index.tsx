import { FC } from "react";
import { Swiper } from "swiper/react";
import React from "react";
import "swiper/css";
import {
  CoverflowEffectOptions,
  PaginationOptions,
  SwiperModule,
} from "swiper/types";

interface CustomCarouselProps {
  children: React.ReactNode;
  effect?: string | undefined;
  slidesPerView?: number | "auto" | undefined;
  spaceBetween?: number;
  grabCursor?: boolean | undefined;
  coverflowEffect?: CoverflowEffectOptions | undefined;
  breakpoints?: {
    [key: string]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
  className?: string;
  modules?: SwiperModule[];
  navigation?: boolean;
  pagination?: boolean | PaginationOptions | undefined;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
}

const CustomCarousel: FC<CustomCarouselProps> = ({
  children,
  slidesPerView,
  spaceBetween,
  autoplay,
  breakpoints,
  className,
  modules,
  navigation,
  pagination,
  effect,
  grabCursor,
  coverflowEffect,
}) => {
  return (
    <Swiper
      modules={modules}
      coverflowEffect={coverflowEffect}
      effect={effect}
      grabCursor={grabCursor}
      fadeEffect={{ crossFade: true }}
      slidesPerView={slidesPerView}
      loop={true}
      navigation={navigation}
      pagination={pagination}
      spaceBetween={spaceBetween}
      autoplay={{
        delay: autoplay?.delay,
        disableOnInteraction: autoplay?.disableOnInteraction,
      }}
      breakpoints={breakpoints}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default CustomCarousel;
