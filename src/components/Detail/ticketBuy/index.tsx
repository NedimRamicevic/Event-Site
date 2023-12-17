import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { EventService } from "../../../services/EventService";

const TicketBuy = () => {
  const { name = "" } = useParams();
  const id = name.split("-")[name.split("-").length - 1];
  const fetcher = () => EventService.getById(id);

  const { data, isLoading, error } = useSWR("ticketFetch", fetcher);
  const [quantitiyof1stPhase, setQuantityof1stPhase] = useState(0);
  const [quantityofEarlyBird, setQuantityofEarlyBird] = useState(0);
  const [quantityofEarlyBackstage, setQuantityofEarlyBackstage] = useState(0);
  const [quantityofEarlyVIP, setQuantityofEarlyVIP] = useState(0);
  const totalTickets =
    quantitiyof1stPhase +
    quantityofEarlyBird +
    quantityofEarlyBackstage +
    quantityofEarlyVIP;
  const total =
    quantitiyof1stPhase * 800 +
    quantityofEarlyBird * 200 +
    quantityofEarlyBackstage * 400 +
    quantityofEarlyVIP * 1000;

  const list = ["1. Aşama", "Erken Kuş", "Erken Dönem", "Erken VIP"];

  const onPurchaseClick = () => {
    if (totalTickets > data.ticketCount) {
      alert("Not enough tickets");
    } else {
      const newData = {
        ...data,
        ticketCount: data.ticketCount - totalTickets,
      };
      alert(`successfull purchase of ${totalTickets} tickets`);
      EventService.sellTicket(data._id, newData);

    }
  };

  const handleQuantityof1stPhase = (what: string) => {
    if (what === "minus") {
      setQuantityof1stPhase((prev) => prev + 1);
    } else {
      if (quantitiyof1stPhase > 0) {
        setQuantityof1stPhase((prev) => prev - 1);
      }
    }
  };
  const handleQuantityofEarlyBird = (what: string) => {
    if (what === "minus") {
      setQuantityofEarlyBird((prev) => prev + 1);
    } else {
      if (quantityofEarlyBird > 0) {
        setQuantityofEarlyBird((prev) => prev - 1);
      }
    }
  };

  const handleQuantityofEarlyBackstage = (what: string) => {
    if (what === "minus") {
      setQuantityofEarlyBackstage((prev) => prev + 1);
    } else {
      if (quantityofEarlyBackstage > 0) {
        setQuantityofEarlyBackstage((prev) => prev - 1);
      }
    }
  };

  const handleQuantityofEarlyVIP = (what: string) => {
    if (what === "minus") {
      setQuantityofEarlyVIP((prev) => prev + 1);
    } else {
      if (quantityofEarlyVIP > 0) {
        setQuantityofEarlyVIP((prev) => prev - 1);
      }
    }
  };
  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>errorrr</div>;
  }
  return (
    <div className="px-0 sm:px-20 pt-28">
      <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
        {data.name}
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-wrap items-center w-3/4 gap-4">
          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[0]}</p>
            <p>800₺</p>
            <div className="flex items-center justify-center gap-2 flow-row">
              <button onClick={() => handleQuantityof1stPhase("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantitiyof1stPhase}</p>
              <button onClick={() => handleQuantityof1stPhase("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[1]}</p>
            <p>200₺</p>
            <div className="flex items-center justify-center gap-2 flow-row">
              <button onClick={() => handleQuantityofEarlyBird("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyBird}</p>
              <button onClick={() => handleQuantityofEarlyBird("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[2]}</p>
            <p>400₺</p>
            <div className="flex items-center justify-center gap-2 flow-row">
              <button onClick={() => handleQuantityofEarlyBackstage("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyBackstage}</p>
              <button onClick={() => handleQuantityofEarlyBackstage("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[3]}</p>
            <p>1000₺</p>
            <div className="flex items-center justify-center gap-2 flow-row">
              <button onClick={() => handleQuantityofEarlyVIP("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyVIP}</p>
              <button onClick={() => handleQuantityofEarlyVIP("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/4 ">
          <div className="w-full h-full p-6 bg-slate-600">
            <div className="flex gap-6">
              <img src={data.image} className="w-[75px] h-[75px]" alt="" />

              <p>{data.name}</p>
              <div className="flex flex-row items-end gap-1">
                <p>available tickets:</p>
                <p>{data.ticketCount}</p>
              </div>
            </div>
            <div className="flex items-center w-[100%] border-b my-4 border-white "></div>

            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-start gap-4 ">
                <FaRegCalendarAlt />
                {data.eventDate}
              </div>
              <div className="flex flex-row items-start justify-start gap-4 ">
                <MdOutlinePlace />
                {data.venue}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full gap-6 p-8 bg-slate-900">
            <div className="flex flex-row justify-between gap-4 ">
              <div>Toplam Fiyat:</div>
              <div>{total}₺</div>
            </div>
            <div className="flex flex-row justify-between gap-4 ">
              <div>Toplam Bilet:</div>
              <div>{totalTickets}</div>
            </div>
            <div
              onClick={() => onPurchaseClick()}
              className="p-2 text-center text-black bg-yellow-400 cursor-pointer"
            >
              Satın Al
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TicketBuy;
