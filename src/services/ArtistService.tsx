import { BaseService } from "./BaseService";

export const ArtistService = {
  getAll: async () => await BaseService.get("artists"),
  getById: async (id: string) => await BaseService.get("artist/" + id),
};
