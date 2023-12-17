import { BaseService } from "./BaseService";

export const VenueService = {
  getAll: async () => await BaseService.get("venue"),
};