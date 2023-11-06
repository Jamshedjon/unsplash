import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import imgReducer from "../features/imgSlice";

export const store = configureStore({
  reducer: { img: imgReducer },
});
