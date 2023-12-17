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
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default categoriesSlice.reducer;
