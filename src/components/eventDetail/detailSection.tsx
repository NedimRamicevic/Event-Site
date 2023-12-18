import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import Map from "./map";
import { event } from "../../types";

const DetailSection = ({
  event,
  url,
  cities,
}: {
  event: event;
  url: string;
  cities: { name: string; location: [number, number] }[];
}) => {
  return (
    <div className="flex flex-col gap-6 px-4 pt-8 mx-4 mt-8 md:flex-row md:px-12 md:mx-24 md:mt-24 font-raleway mb-24">
      <div className="flex flex-col w-full gap-20 md:w-4/6">
        <div className="flex flex-col w-3/4 gap-6">
          <img
            className="rounded-md  h-[200px]"
            src={event.image}
            alt={event.name}
          />
        </div>
        <div className="flex flex-col w-3/4 gap-6">
          <h2 className="font-bold darkText text-subtitle ">Description</h2>
          <h3 className=" text-text">{event.description}</h3>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 mt-8 md:w-2/6 md:mt-0">
        <div className="flex flex-col gap-6">
          <h2>Location</h2>
          <div>
            <Map cities={cities} />
          </div>
          <div>
            <h2 className="font-bold darkText text-subtitle ">Artist</h2>
            <h3>{event.artist}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Share with your friends</h2>
          <div className="flex gap-2">
            <FacebookShareButton url={url}>
              <FaFacebookF className="w-8 h-8 p-1.5 bg-blue-500 rounded-full" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <FaTwitter className="w-8 h-8 p-1.5 bg-blue-300 rounded-full" />
            </TwitterShareButton>
            <InstapaperShareButton url={url}>
              <FaInstagram className="w-8 h-8 p-1.5 bg-red-600 rounded-full" />
            </InstapaperShareButton>
            <LinkedinShareButton url={url}>
              <FaLinkedin className="w-8 h-8 p-1.5 bg-blue-700 rounded-full" />
            </LinkedinShareButton>
            <TelegramShareButton url={url}>
              <FaTelegram className="w-8 h-8 p-1.5 bg-blue-900 rounded-full" />
            </TelegramShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
