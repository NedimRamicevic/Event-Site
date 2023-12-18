import MuiButton from "../_coreComponent/mui/button";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { event } from "../../types";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { slugify } from "../_coreComponent/slug";

const SummaryCard = (props: {
  event: event;
  name: string;
  eventDate: Date;
}) => {
  const formattedDate = props.event.eventDate
    ? format(new Date(props.event.eventDate), "dd MMMM yyyy", { locale: tr })
    : "";
  const link = slugify(`${props.event.name}-${props.event._id}`);
  return (
    <div className="box-border flex flex-col mx-4 mt-8 text-white bg-center bg-cover shadow-dark md:mx-12 font-raleway h-4/5 rounded-2xl bg-background-image-1">
      <div className="relative ">
        <Link
          className="absolute flex items-center gap-2 text-white text-subtitle left-4 md:left-16 top-10"
          to={"/"}
        >
          <BsArrowLeft className="w-6 h-6" /> Back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-around mt-20 md:flex-row sm:mt-0 md:mt-16">
        <div className="flex-1 ">
          <div className="mx-4 md:mx-16 ">
            <h1 className="pb-6 font-bold text-title text-white ">
              {props.event?.name}
            </h1>

            <p className="text-title ">
              <Link
                className="text-primary"
                to={`/location/${props.event.location}`}
              >
                {props.event.location}
              </Link>
            </p>
            <div className="flex gap-2 pt-4 font-bold text-white">
              <CiLocationOn className="w-6 h-6 text-primary" />
              View Map
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 m-4 rounded-lg md:m-20 ">
          <div className="flex flex-col h-full gap-4 p-8 mx-4 bg-fourth shadow-dark md:mx-28 rounded-xl">
            <div className="flex  justify-around ">
              <div className="flex flex-col">
                <h2 className="text-primary text-subtitle">Date </h2>
                <p className=" text-text text-fifth">{formattedDate}</p>
              </div>
              <div className="flex flex-col  ">
                <h2 className="text-subtitle text-primary">Hour</h2>
                <p>
                  Start:{" "}
                  <span className="font-bold ">{props.event.startTime} </span>
                </p>
                <p>
                  End: <span className="font-bold ">{props.event.endTime}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <MuiButton
                variant="contained"
                route={`../ticket/${link}`}
                size="large"
                fullWidth
              >
                Buy Ticket
              </MuiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
