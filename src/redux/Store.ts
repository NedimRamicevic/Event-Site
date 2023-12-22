import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import artistsReducer from "./artistsSlice";
import venuesReducer from "./venuesSlice";
import categoriesReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    artists: artistsReducer,
    venues: venuesReducer,
    categories: categoriesReducer,
  },
});
