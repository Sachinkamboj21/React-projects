import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  // initialState: DEFAULT_ITEMS,
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // console.log(action.payload, action);
      return [...action.payload];
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;
// export const itemsActions = itemsSlice.actions;

export default itemsSlice;
