import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { VenueService } from "../services/VenueService";

export const fetchVenues = createAsyncThunk("venues/fetchVenues", async () => {
  const data = VenueService.getAll();
  return data;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVenues.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchVenues.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    },
    [fetchVenues.rejected]: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    },
  },
});

export default venuesSlice.reducer;
