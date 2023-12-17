import CustomSlider from "./../_coreComponent/customSlider";
import BigCarousel from "../_coreComponent/bigCarousel";
import { event } from "../../types";

import { useSelector } from "react-redux";

const Carousel = () => {
  const { events, error } = useSelector((state: any) => state.events);

  if (!events) {
    return <div>Loadings</div>;
  }
  if (error) {
    return <div>Error </div>;
  }

  return (
    <div className="w-screen ">
      <BigCarousel events={events.slice(12, 20)} title="Populer Etkinlikler" />
      <CustomSlider
        events={events.filter((event: event) => event.category === "Tiyatro")}
        title="Tiyatro"
      />
      <CustomSlider
        events={events.filter((event: event) => event.category === "Stand-Up")}
        title="Stand-Up"
      />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <BigCarousel
          events={events.filter((event: event) => event.venue === "Dorock XL")}
          title="Dorock XL"
        />
      </div>
      <CustomSlider
        events={events.filter((event: event) => event.category === "Müzik")}
        title="Müzik"
      />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <CustomSlider
          events={events.filter(
            (event: event) => event.category === "Festival"
          )}
          title="Festival"
        />
        <BigCarousel
          events={events.filter(
            (event: event) => event.venue === "Volkswagen Arena"
          )}
          title="Volkswagen Arena"
        />
      </div>
      <CustomSlider
        events={events.filter((event: event) => event.category === "Sinema")}
        title="Sinema"
      />
    </div>
  );
};

export default Carousel;
