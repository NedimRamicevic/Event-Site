import useSWR from "swr";
import { EventService } from "../../services/EventService";
import { event } from "../../types";
import Card from "../_coreComponent/card";
import { slugify } from "../_coreComponent/slug";

const fetcher = () => EventService.getAll();

const OtherEvents = () => {
  const { data, isLoading, error } = useSWR("otherEvents", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>is loading</div>;
  const cards = data.slice(0, 12);

  return (
    <div className="flex flex-col gap-6 px-24 bg-gray-800 lg:p-24 font-raleway">
      <h1 className="mt-10 font-bold text-yellow-500 text-title">
        Other Events
      </h1>
      <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        {cards.map((card: event, i: number) => (
          <Card
            key={i}
            title={card.name}
            image={card.image}
            date={card.eventDate}
            route={`../event/${slugify(`${card.name} ${card._id}`)}`}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;
