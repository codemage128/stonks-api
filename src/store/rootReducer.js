import { combineReducers } from "@reduxjs/toolkit";
import { reducer as eventReducer } from "../slices/event";

export const rootReducer = combineReducers({
  event: eventReducer,
});
