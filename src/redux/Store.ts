// @ts-check

import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import artistsReducer from "./artistsSlice";
import venuesReducer from "./venuesSlice";
import categoriesReducer from "./categorySlice";

/** @type {import("@reduxjs/toolkit").EnhancedStore}*/
const store = configureStore({
  reducer: {
    events: eventsReducer,
    artists: artistsReducer,
    venues: venuesReducer,
    categories: categoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
