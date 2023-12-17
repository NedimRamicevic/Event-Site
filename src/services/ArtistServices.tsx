import { BaseService } from "./BaseService";

export const ArtistService = {
  getAll: async () => await BaseService.get("artist"),
 
};
