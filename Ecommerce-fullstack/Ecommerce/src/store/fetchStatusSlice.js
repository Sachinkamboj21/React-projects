import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: 'Pending' , true: 'Done'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false },
  },
});

// export const {markFetchDone, markFetchingFinished, markFetchingStarted} = fetchStatusSlice.actions;
export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
