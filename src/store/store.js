import { configureStore } from "@reduxjs/toolkit";
import mydataSlice from "./mydataSlice";

export const store = configureStore({
  reducer: {
    mydata: mydataSlice,
  },
});
