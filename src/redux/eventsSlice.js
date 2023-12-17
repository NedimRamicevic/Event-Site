import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EventService } from "../services/EventService";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const data = EventService.getAll();
  return data;
});

const initialState = {
  events: null,
  loading: true,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.loading = true;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.loading = "false";
      state.events = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.loading = "false";
      state.error = action.error.message;
    },
  },
});

export default eventsSlice.reducer;
