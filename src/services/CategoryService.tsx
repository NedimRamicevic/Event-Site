import { BaseService } from "./BaseService";

export const CategoryService = {
  getAll: async () => await BaseService.get("categories"),
  getById: async (id: string) => await BaseService.get("categories/" + id),
};
