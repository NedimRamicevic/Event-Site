import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { VenueService } from "../services/VenueService";

export const fetchVenues = createAsyncThunk("venues/fetchVenues", async () => {
  const data = VenueService.getAll();
  return data;
});

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenues.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVenues.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVenues.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default venuesSlice.reducer;
