import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EventService } from "../services/EventService";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const data = EventService.getAll();
  return data;
});

const initialState = {
  events: null,
  loading: true,
  error: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = false; // Resetting the error when fetching starts
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when fetching is done
        state.events = action.payload;
        state.error = false; // Resetting the error when fetching is successful
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.loading = false; // Set loading to false when fetching fails
        state.error = true;
      });
  },
});

export default eventsSlice.reducer;
