import { BaseService } from "./BaseService";
import { event } from "../types";

export const EventService = {
  getAll: async () => await BaseService.get("events"),
  getById: async (id: string) => await BaseService.get("event/" + id),
  sellTicket: async (eventId: string, data: event) => {
    try {
      return await BaseService.put(`event/${eventId}`, data);
    } catch (error) {
      console.error("Error selling ticket:", error);
      throw new Error("Failed to sell ticket");
    }
  },
};
