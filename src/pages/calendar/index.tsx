import { BiCalendar, BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useMatch } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";
import Card from "../../components/_coreComponent/card";
import AosDiv from "../../components/_coreComponent/aosEffect";
import { EventService } from "../../services/EventService";
import useSWR from "swr";
import { event } from "../../types";
import { slugify } from "../../components/_coreComponent/slug";

const fetcher = () => EventService.getAll();
const Calendar = () => {
  const matchEvents = useMatch("/events");
  const matchCategory = useMatch("/category");
  const matchCalendar = useMatch("/calendar");
  const activeClassEvents = matchEvents ? "text-yellow-500" : "";
  const activeClassCategory = matchCategory ? "text-yellow-500" : "";
  const activeClassCalendar = matchCalendar ? "text-yellow-500" : "";

  const { data, isLoading, error } = useSWR("calendar", fetcher);

  if (isLoading) {
    <div>Loading..</div>;
  }

  if (error) {
    <div>error..</div>;
  }
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChange = (date: Date) => {
    setSelectedDate(date);
  };

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="bg-no-repeat bg-contain bg-background-image-4">
      <div className="px-0 sm:px-20 pt-28 ">
        <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
          Calendar
        </h1>
        <div className="flex items-center justify-end gap-4 px-10 mb-6 border-b border-white sm:py-2">
          <NavLink
            to={"/events"}
            className={`text-white flex items-center text-lg ${activeClassEvents}`}
          >
            <CiCircleList className={`w-4 h-3 ${activeClassEvents}`} />
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
            <BiCalendar className={`w-4 h-3 ${activeClassCalendar}`} />
            Takvim
          </NavLink>
        </div>
        {/* TAKVİM */}
        <div className="flex flex-col-reverse flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-2/3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-x-10">
              {data &&
                data
                  .filter((card: event) =>
                    isSameDate(new Date(card.eventDate), selectedDate)
                  )
                  .map((card: event, index: number) => (
                    <AosDiv aosType="zoom-in" aosDuration={500} key={index}>
                      <Card
                        image={card.image}
                        title={card.name}
                        date={card.eventDate}
                        time={`${card.startTime}-${card.endTime}`}
                        venue={card.venue}
                        size="medium"
                        route={`../event/${slugify(
                          `${card.name} ${card._id}`
                        )}`}
                      />
                    </AosDiv>
                  ))}
            </div>
          </div>
          <div className="relative w-1/5 p-4 text-right">
            <DatePicker
              selected={selectedDate}
              onChange={onChange}
              minDate={new Date()}
              inline
              showDisabledMonthNavigation
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
