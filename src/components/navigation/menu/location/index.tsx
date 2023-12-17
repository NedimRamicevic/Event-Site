import DropDown from "../../../_coreComponent/headless/dropDown";
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { event } from "../../../../types";
import { CiLocationOn } from "react-icons/ci";

const fetcher = () => EventService.getAll();
function onlyUnique(value: string, index: number, array: string[]): boolean {
  return array.indexOf(value) === index;
}

const Location = () => {
  const { data, isLoading, error } = useSWR("events", fetcher);
  const uniqueLocation = data
    ?.map((event: event) => event.city)
    .filter(onlyUnique);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="">
      <DropDown
        linkActive={true}
        type="location"
        shadow="shadow-dark"
        width="w-full"
        background="bg-black "
        className="font-normal text-white font-raleway max-h-[250px] "
        icon={
          <CiLocationOn className="w-6 h-6 text-white" />
        }
        list={uniqueLocation.map((location: string) => ({ name: location }))}
      />
    </div>
  );
};

export default Location;
