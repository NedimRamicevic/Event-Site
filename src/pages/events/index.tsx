import { BiCalendar, BiCategoryAlt } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useMatch } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";
import Card from "../../components/_coreComponent/card";
import AosDiv from "../../components/_coreComponent/aosEffect";
import { EventService } from "../../services/EventService";
import useSWR from "swr";
import { event } from "../../types";
import SEO from "../../components/_coreComponent/seo";
import { slugify } from "../../components/_coreComponent/slug";


const fetcher = () => EventService.getAll();

const Events = () => {
  const matchEvents = useMatch("/events");
  const matchCategory = useMatch("/category");
  const matchCalendar = useMatch("/calendar");
  const activeClassEvents = matchEvents ? "text-yellow-500" : "";
  const activeClassCategory = matchCategory ? "text-yellow-500" : "";
  const activeClassCalendar = matchCalendar ? "text-yellow-500" : "";

  const { data, isLoading, error } = useSWR("events", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="mb-10 bg-no-repeat bg-contain bg-background-image-4">
      <SEO
        title="Etkinlikler"
        description="En son etkinliklerimizi keşfedin."
        url="http://localhost:5173/events"
      />
      <div className="px-0 sm:px-20 pt-28">
        <h1 className="items-center mb-4 text-2xl font-extrabold text-white font-raleway">
          Etkinlikler ({data.length})
        </h1>
        <div className="flex items-center justify-end gap-4 px-10 mb-6 border-b border-white sm:py-2">
          <NavLink
            to={"/events"}
            className={`text-white flex items-center text-lg ${activeClassEvents}`}
          >
            <CiCircleList className={`w-4 h-4 ${activeClassEvents}`} />
            Liste
          </NavLink>
          <NavLink
            to={"/category"}
            className={`text-white flex items-center text-lg ${activeClassCategory}`}
          >
            <BiCategoryAlt className={`w-4 h-3 ${activeClassCategory}`} />
            Kategori
          </NavLink>
          <NavLink
            to={"/calendar"}
            className={`text-white flex items-center text-lg ${activeClassCalendar}`}
          >
            <BiCalendar className={`w-4 h-4 ${activeClassCalendar}`} />
            Takvim
          </NavLink>
        </div>
        {/* LİSTE */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10">
          {data?.map((card: event, index: number) => (
            <AosDiv aosType="zoom-in" aosDuration={500} key={index}>
              <Card
                title={card.name}
                image={card.image}
                date={card.eventDate}
                time={`${card.startTime}-${card.endTime}`}
                venue={card.venue}
                size="medium"
                className="text-left"
                route={`../event/${slugify(`${card.name} ${card._id}`)}`}
              />
            </AosDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
