import { BaseService } from "./BaseService";

export const VenueService = {
  getAll: async () => await BaseService.get("venues"),
  getById: async (id: string) => await BaseService.get("venue/" + id),
};
