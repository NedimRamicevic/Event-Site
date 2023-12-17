import classNames from "classnames";
import React, { CSSProperties } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LiaCitySolid } from "react-icons/lia";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
interface CardProps {
  title?: string;
  city?: string;
  image?: string;
  alt?: string;
  className?: string | undefined;
  route?: string | undefined;
  size?: "small" | "medium" | "circle" | "large";
  time?: string;
  venue?: string;
  date?: string;
  description?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  style?: CSSProperties | undefined;
}

const Card: React.FC<CardProps> = ({
  title,
  city,
  image,
  alt,
  className,
  route,
  size,
  venue,
  time,
  date,
  description,
  onClick,
  style,
}) => {
  const imgClass = classNames({
    "h-[12rem] w-[12rem] rounded-lg": size === "small",
    "h-[17rem]  min-w-[17rem] w-[17rem] rounded-lg": size === "medium",
    "md:h-[28rem] lg:h-[33rem] sm:h-[26rem] h-[25rem] rounded-lg w-11/12 mx-auto":
      size === "large",
    "h-[11rem] w-[11rem] rounded-full": size === "circle",
  });

  const formattedDate = date
    ? format(new Date(date), "dd MMMM yyyy", { locale: tr })
    : "";

  return (
    <Link to={route || ``}>
      <div className={`${className}`} onClick={onClick}  >
        {image && <img className={imgClass} src={image} alt={alt} style={style}/>}
        <div className={`mt-1 flex flex-col   font-raleway`}>
          <h1 className="font-bold text-md">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
          {city && (
            <p className="flex items-center text-xs text-gray-500">
              <LiaCitySolid />
              {city}
            </p>
          )}
          <p className="text-sm text-gray-500">{formattedDate}</p>
          <p className="text-sm text-gray-500">{time}</p>
          {venue && (
            <p className="flex items-center text-sm text-gray-500">
              <CiLocationOn />
              {venue}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
