import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

//Exporting the Actions to make changes to the State.
export const { getApiConfiguration, getGenres } = homeSlice.actions;

//Exporting default for the store to keep a hold of teh data.
export default homeSlice.reducer;
