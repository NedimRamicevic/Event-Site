import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { CategoryService } from "../services/CategoryService";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = CategoryService.getAll();
    return response;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default categoriesSlice.reducer;
