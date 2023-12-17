import { BiSearchAlt } from "react-icons/bi";
import { CustomModal } from "../../_coreComponent/customModal";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { useState } from "react";
import { event } from "../../../types";
import Card from "../../_coreComponent/card";
import { slugify } from "../../_coreComponent/slug";


type SearchProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

const fetcher = () => EventService.getAll();

const SearchModal = (props: SearchProps) => {
  const { data, error } = useSWR("search", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setListOpen(true);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const filtered = data.filter((item: event) => {
    return (
      item.name && item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <CustomModal
      isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className="bg-white "
    >
      <div className="z-40 flex flex-col justify-center max-w-3xl mx-auto mt-20 ">
        <h1 className="font-extrabold text-left text-black font-raleway text-title">
          Arama
        </h1>
        <div className="">
          <div className="relative flex flex-row ">
            <BiSearchAlt className="absolute w-6 h-6 text-black top-2 " />
            <input
              className="w-full p-2 pl-10 pr-2 font-bold text-black border-b border-gray-400 outline-none hover:border-black hover:border-b-2 text-text font-raleway"
              type="text"
              placeholder="Mekan, tür, etkinlik veya anahtar kelime"
              onChange={onInputChange}
              value={inputValue}
            />
          </div>

          <div className="relative mt-20 ">
            {listOpen && (
              <div className="z-10 flex flex-col w-full overflow-auto font-medium text-black rounded-lg gap-y-6 text-text font-raleway ">
                {filtered?.map((item: event, i: number) => (
                  <Card
                    key={i}
                    title={item.name}
                    time={`${item.startTime}-${item.endTime}`}
                    venue={item.venue}
                    image={item.image}
                    size="small"
                    className="flex gap-6 duration-300 cursor-pointer hover:bg-gray-200 transition-color"
                    route={`../event/${slugify(`${item.name} ${item._id}`)}`}
                    onClick={() => {
                      props.onClose();
                      window.location.reload();
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default SearchModal;
