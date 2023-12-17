import { useParams } from "react-router-dom";
import useSWR from "swr";
import { EventService } from "../../../services/EventService";
import Card from "../../_coreComponent/card";
import { slugify } from "../../_coreComponent/slug";
import { event } from "../../../types";

const fetcher = () => EventService.getAll();

const EventsByLocation = () => {
  const { data, isLoading, error } = useSWR("location", fetcher);
  const { name = "" } = useParams();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const cards = data.filter((event: event) => event.city === name);
  return (
    <div className="max-w-6xl px-0 mx-auto mb-10 sm:px-20 pt-28 font-raleway">
      <h1 className="font-bold text-center text-title">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-col justify-center w-full gap-4 md:gap-8 ">
        {cards.map((card: event) => (
          <Card
            key={card._id}
            title={card.name}
            image={card.image}
            city={card.city}
            date={card.eventDate}
            venue={card.venue}
            size="small"
            route={`../event/${slugify(`${card.name} ${card._id}`)}`}
            className="flex gap-4 "
          />
        ))}
      </div>
    </div>
  );
};

export default EventsByLocation;
