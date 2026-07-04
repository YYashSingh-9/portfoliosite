import { configureStore } from "@reduxjs/toolkit";
import sliceOne from "./SliceOne";

const Store = configureStore({
  reducer: {
    sliceOne: sliceOne.reducer,
  },
});

export default Store;
