// useEvents.js
import useSWR from "swr";
import { EventService } from "./EventService";
import {event} from "../types"
const fetcher = () => EventService.getAll()

export const useCarousel = () => {
  const { data, isLoading, error } = useSWR("carousel", fetcher);

  
  // const WeekCarousel = data?.filter((event:event) => {
  //   const eventDate = new Date(event.eventDate);
  //   const now = new Date();

  //   return eventDate > now && eventDate < new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  // });
  
  const categoryTheatre = data?.filter((event:event) => {
     return event.category === "tiyatro"
  })

  const categoryBulusma = data?.filter((event:event) => {
    return event.category === "bulusma"
 })

const categoryMuzik = data?.filter((event:event) => {
  return event.category === "muzik"
})
  return { categoryTheatre,categoryBulusma,categoryMuzik, isLoading, error };
};
